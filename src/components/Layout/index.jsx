import { css } from "@emotion/react"
import React from "react"
import { isMobile } from "react-device-detect"
import Sidebar from "../Navigation/Sidebar"
/** @jsx jsx */
import { jsx } from "@emotion/react"
import { Grid } from "@mui/material"

function MainLayout({ children }) {
  const mainContainerStyles = {
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
  }

  const contentStyles = {
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    padding: "1em",
    flexGrow: 1,
  }

  return (
    <div css={mainContainerStyles}>
      {isMobile ? <Sidebar /> : <Sidebar />}
      <div css={contentStyles}>{children}</div>
    </div>
  )
}

export default MainLayout
