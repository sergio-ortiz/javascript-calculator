import { createSlice } from "@reduxjs/toolkit";

const displaySlice = createSlice({
  name: "display",
  initialState: {
    value: 0,
  },
  reducers: {
    buttonPress: (state = initialState, action) => {
      if (action.payload === 'C') {
        state.value = 0;
      } else if(state.value == 0) {
        state.value = action.payload;
      } else {
        state.value += action.payload;
      }
    }
  }
})

export const { buttonPress } = displaySlice.actions;
export default displaySlice.reducer;
