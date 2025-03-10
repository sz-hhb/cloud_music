import { configureStore } from "@reduxjs/toolkit"
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux"
import recommendReducer from "./features/recommend"

const store = configureStore({
  reducer: {
    recommend: recommendReducer
  }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
