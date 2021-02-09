import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Col, Row, Button, Alert } from 'react-bootstrap';
import { FormHandles } from '@unform/core';
import { Form as UnForm } from '@unform/web';
import * as Yup from 'yup';
import { useAuth } from '../../context/AuthContext';

import Input from '../../components/Input';
import getValidationErrors from '../../Utils/getValidationErrors';

interface ISignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {

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
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="mt-5">
          <h1>Students</h1>
          <p className="mb-4">Insira abaixo seu e-mail e senha para acessar a plataforma:</p>
          <UnForm ref={formRef} onSubmit={handleSubmit}>

            <Alert variant="danger">
              E-mail ou senha inválidos!
            </Alert>

            <Input name="email" title="E-mail" type="email" placeholder="Digite seu e-mail"/>

            <Input name="password" title="Senha" type="password" placeholder="Digite sua senha"/>

            <Button variant="primary" type="submit">
              Entrar
            </Button>

          </UnForm>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;