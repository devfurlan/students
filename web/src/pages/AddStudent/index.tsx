import React, { useCallback, useRef } from 'react';
import { Breadcrumb, Button, Col, Container, Row } from 'react-bootstrap';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { Form as UnForm } from '@unform/web';
import Input from '../../components/Form/Input';
import Select from '../../components/Form/Select';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import getValidationErrors from '../../Utils/getValidationErrors';
import api from '../../services/api';

interface ISignInFormData {
  name: string;
  cpf: string;
  email: string;
  birth: Date;
  gender: string;
  grade: string;
  class: string;
}

const AddStudent: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const handleSubmit = useCallback(async (data: ISignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().min(2, 'Nome obrigatório'),
        cpf: Yup.string().max(11).min(11, 'Formato inválido'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        birth: Yup.date().required('Data de nascimento obrigatória'),
        gender: Yup.string().required('Gênero obrigatório'),
        grade: Yup.string().required('Série/Ano obrigatório'),
        class: Yup.string().required('Turma obrigatória'),
      });

      await schema.validate(data, { abortEarly: false });

      await api.post('/students',{
        name: data.name,
        cpf: data.cpf,
        email: data.email,
        birth: data.birth,
        gender: data.gender,
        grade: data.grade,
        class: data.class,
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
  }, [history]);

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

              <Input name="cpf" title="CPF" type="text" placeholder="Digite seu CPF" max="11" min="11"/>

              <Input name="email" title="E-mail" type="email" placeholder="Digite seu e-mail"/>

              <Row>
                <Col>
                  <Input name="birth" title="Data de nascimento" type="date"/>
                </Col>
                <Col>
                  <Select name="gender" title="Gênero" options={[
                    { value: 'M', label: 'Masculino' },
                    { value: 'F', label: 'Femino' },
                  ]}/>
                </Col>
              </Row>

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
};

export default AddStudent;
