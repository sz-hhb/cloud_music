import { useAppSelector } from "@/store"
import { memo } from "react"
import { shallowEqual } from "react-redux"
import type { ReactNode, FC } from "react"

interface IProps {
  children?: ReactNode
}

const Banner: FC<IProps> = () => {
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )

  return (
    <div>
      {banners.map((item) => {
        return <div key={item.imageUrl}>{item.imageUrl}</div>
      })}
    </div>
  )
}

export default memo(Banner)
