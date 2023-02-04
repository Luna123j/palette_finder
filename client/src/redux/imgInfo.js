import { createSlice } from '@reduxjs/toolkit'

export const imgInfoSlice = createSlice({
  name: 'imgInfo',
  initialState: {
    data: [],
    imgUrl: "",
  },
  reducers: {
    setImgFile: (state,action) =>{
      state.data= action.payload
    },

    setImgUrl: (state,action) =>{
      state.imgUrl = action.payload;
    }

  }
})

export const { setImgFile,setImgUrl } = imgInfoSlice.actions

export default imgInfoSlice.reducer