import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface IState {
  count: number
}

const initialState: IState = {
  count: 0
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeCounter(state, action: PayloadAction<number>) {
      state.count = action.payload
    }
  }
})

export const { changeCounter } = counterSlice.actions
export default counterSlice.reducer
