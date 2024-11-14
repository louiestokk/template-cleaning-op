import {combineReducers,configureStore} from '@reduxjs/toolkit'
import FormReducer from './features/formSlice'
const rootReducer = combineReducers({
    form:FormReducer
})

export const store = configureStore({
    reducer:rootReducer
})