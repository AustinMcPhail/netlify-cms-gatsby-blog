import React from "react"

import { rhythm, scale } from "../utils/typography"
import Sidebar from "./Sidebar/Sidebar"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const titleSegments = title.split(' ');

  return (
    <div style={{
      display: `grid`,
      gridTemplateColumns: `25% auto`,
      gridTemplateRows: `auto`
    }}>
      <Sidebar title={title}/>
      <main>{children}</main>
    </div>
  )
}

export default Layout