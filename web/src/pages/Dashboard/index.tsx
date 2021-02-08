import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../../components/Header';
import StudentsList from '../../components/StudentsList';
import Title from '../../components/Title';

function App() {
  return (
    <>
      <Header/>
      <Title/>
      <StudentsList/>
    </>
  );
}

export default App;
