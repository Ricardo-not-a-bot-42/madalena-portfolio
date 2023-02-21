import {
  Button,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
} from "@mui/material"
import React from "react"
/** @jsx jsx */
import { jsx } from "@emotion/react"
import SidebarHeader from "./SidebarHeader"
import { divider } from "../../../styles/common"
import { ExpandLess, ExpandMore } from "@mui/icons-material"
import BrushIcon from "@mui/icons-material/Brush"
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline"

const SidebarStyles = {
  height: "100%",
  width: "20%",
  minWidth: "250px",
  maxWidth: "300px",
  padding: "0.5em",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  justifyContent: "space-between",
}

const MenuListStyles = {}

const MenuItemStyles = {
  display: "flex",
  flexDirection: "column",
  "&:last-child": {
    marginBottom: "0",
  },
}

const MenuButtonStyles = {
  width: "100%",
  textAlign: "center",
  borderRadius: "6px",
  margin: "0 0.5em",
  flexDirection: "row-reverse",
  svg: {
    position: "absolute",
    color: "grey",
  },
}

const SelectedButtonStyles = {
  ...MenuButtonStyles,
  "div > span": {
    color: "#979ece",
    fontWeight: "bold",
  },
  svg: { position: "absolute", color: "#979ece" },
}

const CollapseStyles = {
  width: "100%",
}

const CollapseButtonStyles = {
  ...MenuButtonStyles,
  marginLeft: "0",
}

const SidebarBottomStyles = {
  margin: "0 0.5em",
}

const RequestButtonStyles = {
  width: "100%",
  backgroundColor: "#979ece",
  padding: "1em 1.5em",
  borderRadius: "12px",
  "&:hover": {
    backgroundColor: "#a58eb3",
    svg: {
      color: "#a58eb3",
    },
  },
  svg: {
    backgroundColor: "white",
    borderRadius: "50%",
    fontSize: "30px !important",
    marginRight: "0.15em",
    padding: "3px",
    transition: "all 250ms ease-in-out",
    color: "#979ece",
  },
  h3: {
    margin: "0",
  },
}

const CopyrightStyles = {
  textAlign: "center",
  h5: {
    marginBottom: "1em",
  },
}

function Sidebar(props) {
  const [openTab, setOpenTab] = React.useState("")

  return (
    <Paper css={SidebarStyles}>
      <div>
        <SidebarHeader />
        <Divider css={divider} />
        <List>
          {["PORTFOLIO", "PROJECTS", "SKETCHES"].map((text, index) => (
            <ListItem key={text} disablePadding css={MenuItemStyles}>
              <ListItemButton
                css={text === openTab ? SelectedButtonStyles : MenuButtonStyles}
                onClick={() => setOpenTab(openTab === text ? "" : text)}
              >
                <ListItemText primary={text} />
                {text === "PORTFOLIO" && openTab === "PORTFOLIO" ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )}
              </ListItemButton>
              <Collapse
                in={text === "PORTFOLIO" && openTab === "PORTFOLIO"}
                timeout="auto"
                css={CollapseStyles}
                unmountOnExit
              >
                <List component="div" disablePadding>
                  <ListItemButton css={CollapseButtonStyles}>
                    <ListItemText primary="Drawings" />
                  </ListItemButton>
                  <ListItemButton css={CollapseButtonStyles}>
                    <ListItemText primary="Digital Art" />
                  </ListItemButton>
                </List>
              </Collapse>
            </ListItem>
          ))}
        </List>
        <Divider css={divider} />
        <List>
          {["ABOUT ME", "CONTACTS"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                css={MenuButtonStyles}
                onClick={() => setOpenTab(text)}
              >
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
      <div css={SidebarBottomStyles}>
        <Button
          variant="contained"
          startIcon={<DriveFileRenameOutlineIcon />}
          css={RequestButtonStyles}
        >
          <h3>Art Request</h3>
        </Button>
        <div css={CopyrightStyles}>
          <h5>Copyright© 2023, All Rights Reserved</h5>
        </div>
      </div>
    </Paper>
  )
}

export default Sidebar
