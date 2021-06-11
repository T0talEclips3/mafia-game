import React from "react";

export interface IFormContext {
  dispatch: React.Dispatch<IFormAction>;
  state: IFormState;
}

export interface IFormState {
  username: string;
  password: string;
  email?: string;
}

export interface IFormAction {
  type: string;
  payload: any;
}

const initialState = {
  username: "",
  password: "",
};

const CHANGE_NAME = "form/change/name";
const CHANGE_PASSWORD = "form/change/password";
const CHANGE_EMAIL = "form/change/email";

export const CHANGE_NAME_ACTION = (payload: string) => {
  return { type: CHANGE_NAME, payload: payload };
};
export const CHANGE_PASSWORD_ACTION = (payload: string) => {
  return { type: CHANGE_PASSWORD, payload: payload };
};
export const CHANGE_EMAIL_ACTION = (payload: string) => {
  return { type: CHANGE_EMAIL, payload: payload };
};

const FormReducer = (state = initialState, action: IFormAction) => {
  console.log(state.username);
  console.log(state.password);

  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, username: action.payload };
    case CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    case CHANGE_EMAIL:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

const FormContext = React.createContext<IFormContext | undefined>(undefined);

export const FormProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(FormReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <form>{children}</form>
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = React.useContext(FormContext);

  if (context === void 0) {
    throw new Error("useFormContext must be used within a FormProvider");
  }

  return context;
};
