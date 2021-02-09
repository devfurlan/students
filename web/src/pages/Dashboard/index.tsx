import React from 'react';

import Header from '../../components/Header';
import StudentsList from '../../components/StudentsList';
import Title from '../../components/Title';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header/>
      <Title name="Alunos" button={true}/>
      <StudentsList/>
    </>
  );
}

export default Dashboard;
