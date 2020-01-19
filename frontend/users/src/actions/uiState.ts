import * as actions from '../constants/uiState'

export const changeSort = (sortBy: string) => ({
  type: actions.changeSort,
  sortBy,
})
