import { Box, Button, Hidden } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import NavData from "./NavData";
import { useStyles } from "../Styles";

function Navigation() {
  const classes = useStyles();
  return (
    <Box className={classes.menu}>
      {/* <Hidden mdDown> */}
      <Box className={classes.navbar}>
        {NavData.map((data, index) => (
          <Link key={index} to={data.Route} style={{ textDecoration: "none" }}>
            <Button className={classes.Links}>{data.title}</Button>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
export default Navigation;
