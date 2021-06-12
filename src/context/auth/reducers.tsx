import { IFormAction } from "./actions";
import { CHANGE_EMAIL, CHANGE_NAME, CHANGE_PASSWORD } from "./types";

const FormReducer = (state = {}, action: IFormAction) => {
  const field = action.type.split("/")[2];

  switch (action.type) {
    case CHANGE_NAME:
    case CHANGE_PASSWORD:
    case CHANGE_EMAIL:
      return { ...state, [field]: action.payload };
    default:
      return state;
  }
};

export default FormReducer;
