import { memo, Suspense } from "react"
import { Outlet } from "react-router-dom"
import NavBar from "./cpns/nav-bar"
import type { ReactNode, FC } from "react"

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
