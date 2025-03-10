import { memo, useEffect } from "react"
import { useAppDispatch } from "@/store"
import { fetchBannerDataAction } from "@/store/features/recommend"
import type { ReactNode, FC } from "react"
import Banner from "./cpns/banner"

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [dispatch])

  return (
    <div>
      <Banner />
      Recommend
    </div>
  )
}

export default memo(Recommend)
