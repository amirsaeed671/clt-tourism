import React from "react";
import { useStyle } from "./Style.js";
import SliderVideo from "./Slider/SliderVideo";
import { Box, Button } from "@material-ui/core";
export default function VedioSlider() {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.__vedioSlider}>
        <Box className={classes.__vedioSlier_Button}>
          <Button className={classes.btn} variant="contained">
            Vedio Button
          </Button>
        </Box>
        <Box className={classes.__vedioContainer}>
          <SliderVideo />
        </Box>
      </Box>
    </>
  );
}
