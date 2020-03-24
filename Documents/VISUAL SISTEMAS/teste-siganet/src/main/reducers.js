import { combineReducers } from 'redux'
import senhaReducer from '../senha/senhaReducer'

const rootReducer = combineReducers({
    senha: senhaReducer
})

export default rootReducer