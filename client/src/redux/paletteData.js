import { createSlice } from "@reduxjs/toolkit";

export const paletteDataSlice = createSlice({
  name: 'paletteData',
  initialState: {
    data: []
  },
  reducers: {
    setpaletteData: (state,action) =>{
      state.data = action.payload;
    },
    reset:(state) =>{
      state.data = [];
    },
  }
})

export const {setpaletteData,reset} = paletteDataSlice.actions;

export default paletteDataSlice.reducer;