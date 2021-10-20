import { Box, Button } from "@material-ui/core";
import React from "react";
import CarCard from "./CarCard";
import { useStyle } from "./Style";
import img1 from "../../../../Assets/car.jpeg";

export default function CarRantals() {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.__carRantalContainer}>
        <Box className={classes.content}>
          <h4 className={classes.heading}>Car Rantals for any kind of trip</h4>
          <p className={classes.paragraph}>
            Compare deals from biggest car rental companies
          </p>
        </Box>
        <Box className={classes.__cars}>
          <CarCard image={img1} />
          <CarCard image={img1} />
          <CarCard image={img1} />
          <CarCard image={img1} />
        </Box>
        <Button className={classes.btn} variant="contained">
          BOOK NOW
        </Button>
      </Box>
    </>
  );
}
