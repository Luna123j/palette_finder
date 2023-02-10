import { createSlice } from "@reduxjs/toolkit";

export const paletteDataSlice = createSlice({
  name: 'paletteData',
  initialState: {
    data: []
  },
  reducers: {
    setPaletteData: (state,action) =>{
      state.data = action.payload;
    },
    reset:(state) =>{
      state.data = [];
    },
  }
})

export const {setPaletteData,reset} = paletteDataSlice.actions;

export default paletteDataSlice.reducer;