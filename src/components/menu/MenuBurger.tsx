import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import { Link as LinkScroll } from "react-scroll";
import "./menu.css"

type Anchor = "right";

export default function MenuDrawer() {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  const handleClick = () => {
    setState({
      right: true,
    });
    setOpen(!open);
  };

  const changeLanguageEnglish = () => {
    handleClick();
  };

  const changeLanguageSpanish = () => {
    handleClick();
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250, backgroundColor:"#5C2279", color:"#fff"}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <LinkScroll smooth={true} offset={-80} to="banner">
            <ListItemButton sx={{ width: 220 }}>
              <ListItemIcon>
                <HomeIcon sx={{ color:"#fff" }}/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </LinkScroll>
        </ListItem>
        <ListItem disablePadding>
          <LinkScroll smooth={true} offset={-90} to="about">
            <ListItemButton sx={{ width: 220 }}>
              <ListItemIcon>
                <PersonIcon sx={{ color:"#fff" }}/>
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </LinkScroll>
        </ListItem>
        <ListItem disablePadding>
          <LinkScroll smooth={true} offset={-70} to="projects">
            <ListItemButton sx={{ width: 220 }}>
              <ListItemIcon>
                <PhonelinkIcon sx={{ color:"#fff" }}/>
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </LinkScroll>
        </ListItem>
        <ListItem disablePadding>
          <LinkScroll smooth={true} offset={-60} to="contact">
            <ListItemButton sx={{ width: 220 }}>
              <ListItemIcon>
                <MailIcon sx={{ color:"#fff" }}/>
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </LinkScroll>
        </ListItem>
      </List>
      <Divider sx={{ backgroundColor:"#fff", height:"1px", width:"90%", margin: "auto", opacity:"1" }}/>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LanguageOutlinedIcon sx={{ color:"#fff" }}/>
            </ListItemIcon>
            <ListItemText primary="Language" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="English" onClick={changeLanguageEnglish} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Spanish" onClick={changeLanguageSpanish} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon
              sx={{
                padding: "10px",
                color: "#fff",
                fontSize: "60px",
                backgroundColor: "#9463C6",
                borderRadius: "50%",
              }}
            />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
