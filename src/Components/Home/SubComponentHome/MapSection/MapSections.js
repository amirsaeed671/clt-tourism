import { Box, Button } from "@material-ui/core";
import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import { useStyles } from "./Style";
import img from "../../../../Assets/joe-montanari-Jwwnb6pQ-FU-unsplash.jpg";
function MapSections() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.map_cinatainer}>
        <Box className={classes.map}>
          {/* <Box> */}
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="http://www.gps.ie/">gps systems</a>
          </iframe>
          {/* </Box> */}
        </Box>
        <Box className={classes.mapLeftContent}>
          <Box className={classes.__text}>
            <h4 className={classes.h4}>EOS TATION ERIPUIT VOLUPTUA</h4>
            <p className={classes.p}>
              Ubique iudicabit aliquando ex vix. Sea vidit mucius ei, his cu
              nihil legendos. Per nonumes posidonium ex. Vel possim contentiones
              no, qui te singulis laboramus dissentiunt. Ea vix sanctus
              ullamcorper.
            </p>
          </Box>
          <Box>
            <Box className={classes.imgbtnSection}>
              <img src={img} className={classes.img} alt="Description image" />
              <Box className={classes.__subcontent}>
                <Box>
                  <Button
                    size="small"
                    variant=""
                    color="secondary"
                    className={classes.button}
                    startIcon={<ArrowForwardIosIcon />}
                  >
                    UBIQUE
                  </Button>{" "}
                  <Button
                    size="small"
                    variant=""
                    color="secondary"
                    className={classes.button}
                    startIcon={<ArrowForwardIosIcon />}
                  >
                    ACCUSAM
                  </Button>
                </Box>
                <p className={classes.__p}> 
                  nihil legendos. Per nonumes posidonium ex. Vel possim
                  contentiones no, qui te singulis laboramus dissentiunt. Ea vix
                  sanctus ullamcorper.
                </p>
                <Button startIcon={<ExploreOutlinedIcon/>}   className={classes.__btn}>ULAMACLOAL</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MapSections;
