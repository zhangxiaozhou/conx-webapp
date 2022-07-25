import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counterSlice'

import userInfoReducer from '../features/user/userInfoSlice'


export default configureStore({
  reducer: {
    counter: counterReducer,
    userInfo: userInfoReducer
  },
})