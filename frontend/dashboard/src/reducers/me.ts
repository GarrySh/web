import { createReducer } from '@utils/reducer'
import * as actions from '../constants/me'

const initialState = {
  id: '',
  email: '',
  profile: {
    firstName: '',
    lastName: '',
    errors: {},
  },
}

export default createReducer(initialState, {
  [actions.load]: (state, { user }) => ({ ...state, ...user }),
  [actions.clear]: () => initialState,
  [actions.edit]: (state, { user }) => ({ ...state, ...user }),
})
