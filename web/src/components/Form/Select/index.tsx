import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useField } from '@unform/core';

interface ISelectProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>
}

const Input: React.FC<ISelectProps> = ({ name, title, options }) => {
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
      <Form.Control as="select" defaultValue={defaultValue} ref={inputRef} isInvalid={!!error}>
        {options.map(option =>
          <option key={option.value} value={option.value}>
            {option.label}
          </option>,
        )}
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default Input;