import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useField } from '@unform/core';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<IInputProps> = ({ name, title, type, placeholder }) => {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Form.Group controlId={name}>
      <Form.Label>{title}</Form.Label>
      <Form.Control defaultValue={defaultValue} ref={inputRef} type={type} placeholder={placeholder} isInvalid={!!error}/>
      <Form.Control.Feedback type="invalid">
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default Input;