import { Box } from "@material-ui/core";
import React from "react";
import { useStyle } from "./Style";
function FooterBottom() {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.__bottom}>
        <p style={{ fontWeight: "lighter" }}>
          &copy; 2019 All Right Resurved
        </p>
        <span className={classes.__span}>
          <p style={{ fontWeight: "lighter" }}>Privecy</p>
          <p style={{ fontWeight: "lighter" }}>terms & condition</p>{" "}
        </span>
      </Box>
    </>
  );
}

export default FooterBottom;
