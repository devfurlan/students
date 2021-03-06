import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </Router>
  );
};

export default App;
