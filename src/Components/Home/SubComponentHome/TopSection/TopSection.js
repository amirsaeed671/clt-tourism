import React from "react";
import { useStyles } from "./Style";
import { Box, Button } from "@material-ui/core";
// import { ArrowRight } from "@material-ui/icons";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import FilterButtons from "../FilterButtons/FilterButtons";

function TopSection() {
  const classes = useStyles();
  return (
    <Box className={classes.home_contaner}>
      <Box className={classes.container}>
        <Box className={classes.heading}>
          {/* heading  */}
          <h1>Consectetur Adipiscing Tempus</h1>
        </Box>
        <Box>
          {/* paragraph */}
          <p className={classes.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque
            tempus ac eget diam et laoreet phasellus.
          </p>
        </Box>
        <Box>
          {/* button */}
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.root}
            endIcon={<ArrowForwardIosIcon />}
          >
            EXPLORE
          </Button>
        </Box>
      </Box>
      <FilterButtons />
    </Box>
  );
}

export default TopSection;
