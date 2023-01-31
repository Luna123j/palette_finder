import { createSlice } from '@reduxjs/toolkit'

export const isLoggedInSlice = createSlice({
  name: 'isLoggedIn',
  initialState: {
    status: false,
    user:{}
  },
  reducers: {
    loggedin: (state,action) =>{
      state.status = true;
      state.user = action.payload
    },

    reset: state =>{
      state.status = false;
      state.user = {}
    }

  }
})

export const { loggedin,reset } = isLoggedInSlice.actions

export default isLoggedInSlice.reducer