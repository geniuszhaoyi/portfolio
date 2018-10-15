import { combineReducers } from 'redux'
import counter from './counter'
import basicInfo from './basicInfo'
import loading from './loading'

export default combineReducers({
  counter,
  basicInfo,
  loading,
})
