import React from "react";
import styled from "styled-components";

export interface IInputFieldProps {
  text?: true;
  password?: true;
  email?: true;
  children?: string;
  fieldId: string;
}

const Label = styled.label`
  display: block;
`;

const Input = styled.input`
  height: 2em;
  width: 100%;
  border: 1px solid rgba(210, 210, 210, 0.3);
  padding: 1em 0.25em;
  margin: 0.6em 0;
  border-radius: 4px;
  font-size: 18px;
  line-height: 1.15px;
  &:focus,
  :active {
    outline: none;
    border: 1px solid rgb(0, 135, 202);
  }
`;

const InputField: React.FC<IInputFieldProps> = ({
  text,
  password,
  email,
  fieldId,
  children,
}) => {
  const textType = text ? "text" : undefined;
  const passwordType = password ? "password" : undefined;
  const emailType = email ? "email" : undefined;
  const inputType = textType || passwordType || emailType;

  return (
    <Label htmlFor={fieldId}>
      {children}
      <Input type={inputType} id={fieldId} />
    </Label>
  );
};

export default InputField;
