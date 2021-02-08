import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

function Title() {
  return (
    <Container className="mb-2">
      <Row>
        <Col xs={8} sm={9}>
          <h1>Alunos</h1>
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          <Button variant="success" size="sm"><FaPlus/> Adicionar</Button>{' '}
        </Col>
      </Row>
    </Container>
  );
}

export default Title;