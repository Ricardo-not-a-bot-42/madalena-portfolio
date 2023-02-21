import { ToggleButton, ToggleButtonGroup, Zoom } from "@mui/material"
import React from "react"
import InstagramIcon from "@mui/icons-material/Instagram"
import PinterestIcon from "@mui/icons-material/Pinterest"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
/** @jsx jsx */
import { jsx } from "@emotion/react"

const ListStyles = {
  margin: "0 auto",
  marginTop: "1em",
}

const IconStyles = {
  transition: "color 300ms ease-in-out",
  "&:hover": {
    color: "pink",
  },
}

function SocialsPanel(props) {
  const socials = [
    {
      url: "https://www.abc.com",
      icon: <PinterestIcon css={IconStyles} />,
    },
    {
      url: "https://www.abc.com",
      icon: <InstagramIcon css={IconStyles} />,
    },
    {
      url: "https://www.abc.com",
      icon: <LinkedInIcon css={IconStyles} />,
    },
  ]

  return (
    <ToggleButtonGroup exclusive aria-label="text alignment" css={ListStyles}>
      {socials.map((social, index) => (
        <ToggleButton value="left" aria-label="left aligned">
          <Zoom
            in={true}
            style={{ transitionDelay: props.baseDelay * (index + 1) }}
          >
            {social.icon}
          </Zoom>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}

export default SocialsPanel
