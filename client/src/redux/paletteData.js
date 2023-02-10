import { createSlice } from "@reduxjs/toolkit";

export const paletteDataSlice = createSlice({
  name: 'paletteData',
  initialState: {
    colorData: []
  },
  reducers: {
    setPaletteData: (state,action) =>{
      state.colorData = action.payload;
    },
    reset:(state) =>{
      state.colorData = [];
    },
  }
})

export const {setPaletteData,reset} = paletteDataSlice.actions;

export default paletteDataSlice.reducer;