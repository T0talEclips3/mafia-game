import React from "react";
import styled from "styled-components";
import {
  CHANGE_EMAIL_ACTION,
  CHANGE_NAME_ACTION,
  CHANGE_PASSWORD_ACTION,
  useFormContext,
} from "../../../context/auth";

export interface IInputFieldProps {
  password?: true;
  username?: true;
  email?: true;
  label: string;
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
  fieldId,
  label,
  ...rest
}) => {
  const { state, dispatch } = useFormContext();
  const inputType = Object.keys(rest)[0] as "username" | "password" | "email";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.currentTarget.value;
    switch (inputType) {
      case "username":
        dispatch(CHANGE_NAME_ACTION(currentValue));
        break;
      case "password":
        dispatch(CHANGE_PASSWORD_ACTION(currentValue));
        break;
      case "email":
        dispatch(CHANGE_EMAIL_ACTION(currentValue));
        break;
      default:
        break;
    }
  };

  return (
    <Label htmlFor={fieldId}>
      {label}
      <Input
        type={inputType}
        id={fieldId}
        value={state[inputType]}
        onChange={handleChange}
      />
    </Label>
  );
};

export default InputField;
