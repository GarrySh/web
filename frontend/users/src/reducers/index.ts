import { combineReducers } from 'redux'
import list from './list'
import uiState from './uiState'

export default combineReducers({
  list,
  uiState,
})
