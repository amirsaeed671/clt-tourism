import "./index.css";
import Swipe from "react-easy-swipe";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useStyles } from "./Style";
// import { images } from "../../ImageSlider/ImageSlider";
import { Box, Button, IconButton } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

function Carousel({
  data,
  time,
  classes,
  captionStyle,
  radius,
  style,
  captionPosition,
  automatic,
  pauseIconColor,
  pauseIconSize,
  thumbnails,
  thumbnailWidth,
  showNavBtn = true,
}) {
  //Initialize States
  const [slide, setSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [change, setChange] = useState(0);

  //Function to change slide

  const addSlide = (n) => {
    if (slide + n >= data.length) setSlide(0);
    else if (slide + n < 0) setSlide(data.length - 1);
    else setSlide(slide + n);
  };

  //Start the automatic change of slide

  useEffect(() => {
    if (automatic) {
      var index = slide;
      const interval = setInterval(
        () => {
          if (!isPaused) {
            setSlide(index);
            index++;
            if (index >= data.length) index = 0;
            if (index < 0) index = data.length - 1;
          }
        },
        time ? time : 3000
      );
      return () => {
        clearInterval(interval);
      };
    }
  }, [isPaused, change]);

  function scrollTo(el) {
    const elLeft = el.offsetLeft + el.offsetWidth;
    const elParentLeft = el.parentNode.offsetLeft + el.parentNode.offsetWidth;

    // check if element not in view

    if (elLeft >= elParentLeft + el.parentNode.scrollLeft) {
      el.parentNode.scroll({ left: elLeft - elParentLeft, behavior: "smooth" });
    } else if (elLeft <= el.parentNode.offsetLeft + el.parentNode.scrollLeft) {
      el.parentNode.scroll({
        left: el.offsetLeft - el.parentNode.offsetLeft,
        behavior: "smooth",
      });
    }
  }

  //Listens to slide state changes
  useEffect(() => {
    var slides = document.getElementsByClassName("carousel-item");
    var dots = document.getElementsByClassName("dot");

    var slideIndex = slide;
    var i;
    for (i = 0; i < data.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    // If thumbnails are enabled
    if (thumbnails) {
      var thumbnailsArray = document.getElementsByClassName("thumbnail");
      for (i = 0; i < thumbnailsArray.length; i++) {
        thumbnailsArray[i].className = thumbnailsArray[i].className.replace(
          " active-thumbnail",
          ""
        );
      }
      if (thumbnailsArray[slideIndex] !== undefined)
        thumbnailsArray[slideIndex].className += " active-thumbnail";
      scrollTo(document.getElementById(`thumbnail-${slideIndex}`));
    }

    if (slides[slideIndex] !== undefined)
      slides[slideIndex].style.display = "block";
    if (dots[slideIndex] !== undefined) dots[slideIndex].className += " active";
  }, [slide, isPaused]);

  return (
    <Box className={classes.secSlider}>
      <Box className={classes.sliderBox}>
        <Box className={classes.imgBox}>
          <Box className={classes.__singleImage}>
            {data.map((item, index) => {
              return (
                <div
                  className="carousel-item fade"
                  style={{}}
                  onMouseDown={(e) => {
                    automatic && setIsPaused(true);
                  }}
                  onMouseUp={(e) => {
                    automatic && setIsPaused(false);
                  }}
                  onMouseLeave={(e) => {
                    automatic && setIsPaused(false);
                  }}
                  onTouchStart={(e) => {
                    automatic && setIsPaused(true);
                  }}
                  onTouchEnd={(e) => {
                    automatic && setIsPaused(false);
                  }}
                  key={index}
                >
                  <img
                    className={classes.DescriptedImage}
                    src={item.image}
                    alt={item.caption}
                  />
                  {isPaused && (
                    <div
                      style={{
                        color: pauseIconColor ? pauseIconColor : "white",
                        fontSize: pauseIconSize ? pauseIconSize : "40px",
                      }}
                    ></div>
                  )}
                  <Box className={classes.__captions}>
                    <p
                      className={`carousel-caption-${
                        captionPosition ? captionPosition : ""
                      }`}
                      style={captionStyle}
                      dangerouslySetInnerHTML={{ __html: item.caption }}
                    ></p>
                  </Box>
                </div>
              );
            })}
          </Box>
          <Box className={classes.imgDescription}>
            <Box className={classes.___content}>
              <h3 className={classes.descripHeading}>
                EOS TATION ERIPUIT VOLUPTUA
              </h3>
              <p className={classes.para}>
                Ubique iudicabit aliquando ex vix. Sea vidit mucius ei, his cu
                nihil legendos. Per nonumes posidonium ex. Vel possim
                contentiones no, qui te singulis laboramus dissentiunt. Ea vix
                sanctus ullamcorper.
              </p>
            </Box>
            <Box className={classes.__slider}>
              {/* <MySlider /> */}

              <div style={style} className="box">
                <div>
                  {/*  */}
                </div>
                {thumbnails && (
                  <Box className={classes.__sliderContainer} id="thumbnail-div">
                    {data.map((item, index) => {
                      return (
                        <img
                          width={thumbnailWidth ? thumbnailWidth : "200px"}
                          src={item.image}
                          alt={item.caption}
                          className="thumbnail"
                          id={`thumbnail-${index}`}
                          key={index}
                          onClick={(e) => {
                            setSlide(index);
                            setChange(!change);
                          }}
                        />
                      );
                    })}
                  </Box>
                )}
              </div>
            </Box>
            <Box className={classes.explorbtn}>
              <Box className={classes.explore}>
                <p>Explore</p>
                <IconButton className={classes.xplrbtn}>
                  <ArrowForwardIosIcon className={classes.btnxp} />
                </IconButton>
              </Box>
              <Box className={classes.btnAlign}>
                {showNavBtn && (
                  <Button
                    onClick={(e) => {
                      addSlide(-1);
                      setChange(!change);
                    }}
                    className={classes.arrowButton2}
                  >
                    <ArrowBack className={classes.arrowBtn} />
                  </Button>
                )}
                {showNavBtn && (
                  <Button
                    onClick={(e) => {
                      addSlide(1);
                      setChange(!change);
                    }}
                    className={classes.forwbtn2}
                  >
                    <ArrowForward className={classes.arrowBtn} />
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Carousel;
