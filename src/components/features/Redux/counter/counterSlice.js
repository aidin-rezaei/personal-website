import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [false,12,12],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    Darkmode: (state,action) => {
      // console.log(state);
      state.value = action.payload
    },

  },
})

export const { Darkmode } = counterSlice.actions

export default counterSlice.reducer