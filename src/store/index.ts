import { configureStore } from "@reduxjs/toolkit"
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux"
import counterReducer from "./features/counter"

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
