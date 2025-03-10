import { getBanners } from "@/service/modules/recommend"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchBannerDataAction = createAsyncThunk(
  "/banner",
  async (arg, { dispatch }) => {
    const res = await getBanners()
    dispatch(changeBannerAction(res.banners))
  }
)

export interface IRecommendState {
  banners: any[]
}

const initialState: IRecommendState = {
  banners: []
}

const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    changeBannerAction(state, { payload }) {
      state.banners = payload
    }
  }
  // extraReducers: (builder) => {
  //   builder.addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
  //     state.banners = payload
  //   })
  // }
})

export const { changeBannerAction } = recommendSlice.actions
export default recommendSlice.reducer
