import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';

import Header from '../../components/Header';
import Title from '../../components/Title';

const UpdateStudents: React.FC = () => {
  return (
    <>
      <Header/>

      <Container className="mb-4">
        <Breadcrumb>
          <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item active>Editar aluno</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <Title name="Editar aluno"/>
      
      <h1>Update</h1>
    </>
  );
}

export default UpdateStudents;
