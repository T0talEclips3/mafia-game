import { CHANGE_EMAIL, CHANGE_NAME, CHANGE_PASSWORD } from "./types";

export interface IFormAction {
  type: string;
  payload: any;
}

export const CHANGE_NAME_ACTION = (payload: string) => {
  return { type: CHANGE_NAME, payload: payload };
};
export const CHANGE_PASSWORD_ACTION = (payload: string) => {
  return { type: CHANGE_PASSWORD, payload: payload };
};
export const CHANGE_EMAIL_ACTION = (payload: string) => {
  return { type: CHANGE_EMAIL, payload: payload };
};
