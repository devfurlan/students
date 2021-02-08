import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from './context/AuthContext';

import SignIn from './pages/SignIn';

function App() {
  return (
    <AuthProvider>
      <SignIn/>
    </AuthProvider>
  );
}

export default App;
