import React from "react";
import { IFormAction } from "./actions";
import FormReducer from "./reducers";

export interface IFormContext {
  dispatch: React.Dispatch<IFormAction>;
  state: IFormState;
}

export interface IFormState {
  username?: string;
  password?: string;
  email?: string;
}

const initialState = {
  username: "",
  password: "",
};

export const FormContext = React.createContext<IFormContext | undefined>(
  undefined
);

export const FormProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(FormReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <form>{children}</form>
    </FormContext.Provider>
  );
};

export { useFormContext } from "./hooks";
export {
  CHANGE_EMAIL_ACTION,
  CHANGE_NAME_ACTION,
  CHANGE_PASSWORD_ACTION,
} from "./actions";
