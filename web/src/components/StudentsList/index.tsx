import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import api from '../../services/api';

interface IRepository {
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
  /*
    ADD STUDENTS
   */
  // const [students, setStudents] = useState<IRepository[]>([]);
  //
  // async function handleAddStudents(event: FormEvent<HTMLFontElement>): Promise<void> {
  //   event.preventDefault();
  //
  //   const response = await api.get('/students');
  //
  //   const student = response.data;
  //
  //   setStudents([...students, student]);
  // }

  const [students, setStudents] = useState<IRepository[]>([]);

  useEffect(() => {
    api.get('users').then((response) => {
      setStudents(response.data);
    });
  }, []);

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
            <td className="text-center">
              <Button variant="outline-primary" size="sm" className="mr-2"><FaEdit/> Editar</Button>
              <Button variant="outline-danger" size="sm"><FaTrash/> Excluir</Button>
            </td>
          </tr>
        ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default StudentsList;




