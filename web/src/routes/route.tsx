import React from 'react';
import { Route as ReactDOMRoute, RouteProps, Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface IRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<IRouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute {...rest} render={() => {
      return isPrivate === !!user ? (
        <Component/>
      ) : (
        <Redirect to={{ pathname: isPrivate ? '/' : '/dashboard' }}/>
      );
    }}/>
  );
};

export default Route;