import MailIcon from '@material-ui/icons/Mail';
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./Styles";
import React from "react";
import Navigation from "./navData/Navigation";
import SideBar from "./navData/SideBar";
import logo from "../../Assets/Logo.png";
export default function Header() {
  const classes = useStyles();
  return (
    <Box className={classes.header}>
      <Box className={classes.contact_container}>
        <Box variant="body">
          <img src={logo} alt="logo"  className={classes.logo} />
        </Box>
        <Box className={classes.contactInfo}>
          <Typography className={classes.number} variant="body">
            <span className={classes.mbDevice1}>
              <PhoneInTalkIcon className={classes.icon} />
            </span>
            <span className={classes.contact}>000 000 0000</span>
          </Typography>

          <Typography variant="div" className={classes.email}>
            <span className={classes.mbDevice1}><MailIcon/></span>
            <span className={classes.contact}>info@yourcompany.com</span>
          </Typography>
        </Box>
      </Box>
      <div className={classes.nav}>
        <Navigation />
      </div>
      <Box className={classes.sideBar}>
        <SideBar />
      </Box>
    </Box>
  );
}
