import React, { useCallback, useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import './index.css';

interface IStudents {
  id: number;
  name: string;
  birth: string;
  gender: string;
  cpf: string;
  grade: string;
  class: string;
  email: string;
}

const StudentsList: React.FC = () => {
  const [students, setStudents] = useState<IStudents[]>([]);

  const history = useHistory();

  const loadStudents = useCallback(() => {
    api.get('students').then(response => {
      setStudents(response.data);
    }).catch(console.log);
  }, []);

  const handleDelete = useCallback((id) => {
    api.delete(`students/${id}`).then(() => {
      return loadStudents();
    });
  }, [loadStudents]);

  useEffect(() => {
    loadStudents();
  }, [loadStudents]);

  const editStudent = useCallback((id: number) => {
    history.push(`student/update/${id}`)
  }, [history])

  return (
    <Container>
      <Table responsive="sm" hover>
        <thead className="thead-light">
        <tr>
          <th>Nome</th>
          <th>Série</th>
          <th>Turma</th>
          <th className="text-center">Ações</th>
        </tr>
        </thead>
        <tbody>
        {students.map(student => (
          <tr key={student.cpf}>
            <td>{student.name}</td>
            <td>{student.grade}</td>
            <td>{student.class}</td>
            <td className="col-actions">
              <Button onClick={() => editStudent(student.id)}  variant="outline-primary" size="sm">
                <FaEdit/> <span className="d-none d-md-inline-block">Editar</span>
              </Button>{` `}
              <Button onClick={() => handleDelete(student.id)} variant="outline-danger" size="sm">
                <FaTrash/> <span className="d-none d-md-inline-block">Excluir</span>
              </Button>
            </td>
          </tr>
        ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default StudentsList;




