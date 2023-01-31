import { configureStore } from '@reduxjs/toolkit'
import isLoggedInReducer from './isLoggedIn'


export default configureStore({
  reducer: {
    isLoggedIn: isLoggedInReducer
  }
})