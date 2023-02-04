import { configureStore } from '@reduxjs/toolkit'
import isLoggedInReducer from './isLoggedIn'
import imgInfoReducer from './imgInfo'

export default configureStore({
  reducer: {
    isLoggedIn: isLoggedInReducer,
    imgInfo: imgInfoReducer
  }
})