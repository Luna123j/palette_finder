import { configureStore } from '@reduxjs/toolkit'
import isLoggedInReducer from './isLoggedIn'
import imgInfoReducer from './imgInfo'
import paletteDataReducer from './paletteData'

export default configureStore({
  reducer: {
    isLoggedIn: isLoggedInReducer,
    imgInfo: imgInfoReducer,
    paletteData: paletteDataReducer
  }
})