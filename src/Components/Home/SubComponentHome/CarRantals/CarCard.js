import { Box } from "@material-ui/core";
import React from "react";
// import { images } from "../ImageSlider/ImageSlider";
import { useStyle } from "./Style";
export default function CarCard({ image }) {
  const classes = useStyle();
  return (
    <Box className={classes.__carCard}>
      <img classes={classes.__carImage} src={image} alt="" />
      <p className={classes.__p}>Car Name </p>
    </Box>
  );
}
