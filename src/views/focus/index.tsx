import React, { memo } from "react"
import type { ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

const Focus: React.FC<IProps> = (props) => {
  return <div>Focus</div>
}

export default memo(Focus)
