import { createReducer } from "@utils/reducer";
import * as actions from "../constants";

interface Errors {
  email?: string;
  password?: string;
}

interface State {
  email: string;
  password: string;
  errors: Errors;
}

const initialState: State = {
  email: "",
  password: "",
  errors: {
    email: "проверка, начни печатать",
    password: "проверка, начни печатать",
  }
};

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({
    ...state,
    [field]: value,
    errors: {
      ...state.errors,
      [field]: '',
    }
  }),
  [actions.setErrors]: (state, { errors }) => ({ ...state, errors }),
  [actions.clear]: () => initialState
});
