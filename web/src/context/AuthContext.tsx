import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';


interface ISignInCredentials {
  email: string;
  password: string;
}

interface IUser {
  id: number;
  name: string;
}

interface IAuthContextData {
  user: IUser;

  signIn(credentials: ISignInCredentials): Promise<void>;

  signOut(): void;
}

interface IAuthState {
  token: string;
  user: IUser;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@StudentsApp:token');
    const user = localStorage.getItem('@StudentsApp:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('auth/login', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@StudentsApp:token', token);
    localStorage.setItem('@StudentsApp:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@StudentsApp:token');
    localStorage.removeItem('@StudentsApp:user');

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
