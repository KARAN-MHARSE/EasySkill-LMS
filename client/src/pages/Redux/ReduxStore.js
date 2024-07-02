import {configureStore} from "@reduxjs/toolkit"
import userReducer from './User/user.reducers'


export const store = configureStore({
    reducer:userReducer
})