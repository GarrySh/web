import { createReducer } from '@utils/reducer'
import * as actions from '../constants/uiState'

const initialState = {
  sortBy: 'id',
  sortDirection: 'asc',
}

export default createReducer(initialState, {
  [actions.changeSort]: (state, { sortBy }) => {
    if (state.sortBy === sortBy) {
      return {
        ...state,
        sortDirection: state.sortDirection === 'asc' ? 'desc' : 'asc',
      }
    }
    return { ...state, sortBy, sortDirection: 'asc' }
  },
})
