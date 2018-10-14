import { combineReducers } from 'redux'
import counter from './counter'
import basicInfo from './basicInfo'

export default combineReducers({
  counter,
  basicInfo,
})
