import { createSlice } from "@reduxjs/toolkit";

export const paletteDataSlice = createSlice({
  name: 'paletteData',
  initialState: {
    colorDataHex: [],
    colorDataRgb: []
  },
  reducers: {
    setPaletteDataRgb: (state,action) =>{
      state.colorDataRgb = action.payload;
    },
    setPaletteDataHex: (state,action) =>{
      state.colorDataHex = action.payload;
    },
    reset:(state) =>{
      state.colorDataHex = [];
      state.colorDataRgb = [];
    },
  }
})

export const {setPaletteDataRgb,setPaletteDataHex,reset} = paletteDataSlice.actions;

export default paletteDataSlice.reducer;