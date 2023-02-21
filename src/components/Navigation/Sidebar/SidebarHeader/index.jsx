import React from "react"
/** @jsx jsx */
import { jsx } from "@emotion/react"
import { Fade, Skeleton } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import SocialsPanel from "../../../SocialsPanel"

function SidebarHeader(props) {
  const containerStyles = {
    padding: "1em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }

  const logoStyles = {
    width: "75%",
    height: "10em",
    margin: "auto",
    background: "blue",
    borderRadius: "50%",
  }

  return (
    <div css={containerStyles}>
      <Fade in={true}>
        <div>
          <StaticImage
            src="../../../../images/logo1.png"
            placeholder="none"
            quality={100}
            alt="main-logo"
            style={{ filter: "drop-shadow(4px 4px 6px #908abf50)" }}
          />
        </div>
      </Fade>
      <SocialsPanel baseDelay={500} />
    </div>
  )
}

export default SidebarHeader
