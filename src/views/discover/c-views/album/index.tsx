import React, { memo } from "react"
import type { ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

const Album: React.FC<IProps> = (props) => {
  return <div>Album</div>
}

export default memo(Album)
