import React, { useCallback, useRef } from 'react';
import { Breadcrumb, Button, Col, Container, Row } from 'react-bootstrap';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { Form as UnForm } from '@unform/web';
import Input from '../../components/Input';
import { FormHandles } from '@unform/core';
import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import getValidationErrors from '../../Utils/getValidationErrors';

interface ISignInFormData {
  email: string;
  password: string;
}

const AddStudent: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: ISignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, { abortEarly: false });

      await signIn({
        email: data.email,
        password: data.password,
      });

      history.push('/dashboard');
    } catch (e) {
      if (e instanceof Yup.ValidationError) {
        const errors = getValidationErrors(e);

        formRef.current?.setErrors(errors);

        return;
      }

      console.log(e);
      return;
    }
  }, [signIn, history]);



  return (
    <>
      <Header/>

      <Container className="mb-4">
        <Breadcrumb>
          <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item active>Adicionar aluno</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <Title name="Adicionar aluno"/>

      <Container>
        <Row>
          <Col>
            <UnForm ref={formRef} onSubmit={handleSubmit}>

              <Input name="name" title="Nome" type="text" placeholder="Digite seu nome"/>

              <Input name="cpf" title="CPF" type="text" placeholder="Digite seu nome"/>

              <Input name="birth" title="Data de nascimento" type="date" placeholder="Digite seu nome"/>

              <Input name="gender" title="Genero" type="text" placeholder="Digite seu nome"/>

              <Input name="email" title="E-mail" type="email" placeholder="Digite seu e-mail"/>

              <Row>
                <Col>
                  <Input name="grade" title="Série/Ano" type="text" placeholder="5º Ano"/>
                </Col>
                <Col>
                  <Input name="class" title="Turma" type="text" placeholder="B"/>
                </Col>
              </Row>



              <Button variant="primary" type="submit">
                Adicionar
              </Button>

            </UnForm>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default AddStudent;
