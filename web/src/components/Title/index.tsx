import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

interface IProps {
  name: string;
  button?: boolean;
}

const Title: React.FC<IProps> = ({ name, button = false }) => {
  return (
    <Container className="mb-2">
      <Row>
        <Col xs={8} sm={9}>
          <h1 className="h3">{name}</h1>
        </Col>

        {button && (
          <Col className="d-flex justify-content-end align-items-center">
            <Button href="/student/add" variant="success" size="sm"><FaPlus/> Adicionar</Button>
          </Col>
        )}

      </Row>
    </Container>
  );
};

export default Title;