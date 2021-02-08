import React, { FormEvent } from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';

interface ISignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {

  const { signIn } = useAuth();

  // const handleSubmit = useCallback(async (data: ISignInFormData) => {
  //
  //   console.log(signIn);
  //   console.log(data);
  //   console.log({
  //     email: data.email,
  //     password: data.password,
  //   });
  //
  //   try {
  //
  //     await signIn({
  //       email: data.email,
  //       password: data.password,
  //     });
  //
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, [signIn]);


  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<any> => {
    e.preventDefault();
    // @ts-ignore
    const formData = new FormData(e.target);
    // @ts-ignore
    const formDataObj: ISignInFormData = Object.fromEntries(formData.entries());

    try {
      await signIn(formDataObj);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="mt-5">
          <h1>Students</h1>
          <p className="mb-4">Insira abaixo seu e-mail e senha para acessar a plataforma:</p>
          <Form onSubmit={handleSubmit}>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" name="email" placeholder="Digite seu e-mail" required/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" name="password" placeholder="Digite sua senha" required/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Entrar
            </Button>

          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;