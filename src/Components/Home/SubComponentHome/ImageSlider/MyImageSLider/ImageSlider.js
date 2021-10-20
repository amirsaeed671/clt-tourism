import { Box, Button, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useStyles } from "../Style";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import img1 from "../../../../../Assets/axel-houmadi-w2IQ2jc_dj4-unsplash.jpg";
import img2 from "../../../../../Assets/demopick.jpg";
import img3 from "../../../../../Assets/demopick.jpg";
import "./Slider.css";
import img5 from "../../../../../Assets/Skyline.jpg";

export const images = [
  {
    image: img1,
    width: "278px",
    path: "/img1",
    height: "270px",
  },
  {
    image: img3,
    width: "278px",
    height: "270px",
    path: "/img2",
  },
  {
    image: img2,
    width: "278px",
    height: "270px",
    path: "/img3",
  },
  {
    image: img3,
    width: "278px",
    height: "270px",
    path: "/img4",
  },
  {
    image: img2,
    width: "278px",
    height: "270px",
    path: "/img5",
  },
  {
    image: img3,
    width: "278px",
    height: "270px",
    path: "/img6",
  },
  {
    image: img5,
    width: "278px",
    height: "270px",
    path: "/img6",
  },
  {
    image: img3,
    width: "280px",
    height: "270px",
    path: "/img6",
  },
];

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Image__Slider({
  data,
  time,
  radius,
  style,
  automate,
  thmbnails,
  thmbnailWidth,
  shownavBtn = true,
}) {
  const [__slide, set__Slide] = useState(0);
  const [onPaused, setonPaused] = useState(false);
  const [onchange, setonChange] = useState(0);

  //Function to onchange __slide

  const add__Slide = (n) => {
    if (__slide + n >= data.length) set__Slide(0);
    else if (__slide + n < 0) set__Slide(data.length - 1);
    else set__Slide(__slide + n);
  };

  //Start the automate onchange of __slide

  useEffect(() => {
    if (automate) {
      var index_of = __slide;
      const interval = setInterval(
        () => {
          if (!onPaused) {
            set__Slide(index_of);
            index_of++;
            if (index_of >= data.length) index_of = 0;
            if (index_of < 0) index_of = data.length - 1;
          }
        },
        time ? time : 3000
      );
      return () => {
        clearInterval(interval);
      };
    }
  }, [onPaused, onchange]);

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

  //Listens to __slide state onchanges
  useEffect(() => {
    var __sliderIndex_of = document.getElementsByClassName("carousel-item");
    var dot = document.getElementsByClassName("dot");

    var __slidesIndex_of = __slide;
    var x;
    for (x = 0; x < data.length; x++) {
      __sliderIndex_of[x].style.display = "none";
    }
    for (x = 0; x < dot.length; x++) {
      dot[x].className = dot[x].className.replace(" activebtn", "");
    }
    // If thmbnails are enabled
    if (thmbnails) {
      var thmbnailsArray = document.getElementsByClassName("thmbnail");
      for (x = 0; x < thmbnailsArray.length; x++) {
        thmbnailsArray[x].className = thmbnailsArray[x].className.replace(
          " activebtn-thmbnail",
          ""
        );
      }
      if (thmbnailsArray[__slidesIndex_of] !== undefined)
        thmbnailsArray[__slidesIndex_of].className += " activebtn-thmbnail";
      scrollTo(document.getElementById(`thmbnail-${__slidesIndex_of}`));
    }

    if (__sliderIndex_of[__slidesIndex_of] !== undefined)
      __sliderIndex_of[__slidesIndex_of].style.display = "block";
    if (dot[__slidesIndex_of] !== undefined)
      dot[__slidesIndex_of].className += " activebtn";
  }, [__slide, onPaused]);

  const classes = useStyles();
  return (
    <Box className={classes.__slider}>
      <Box className={classes.__sliderContaner}>
        <Box className={classes.__btnContent}>
          <h4 className={classes.heading}>FUSCE DAPIBUS</h4>
          <p className={classes.__sliderPara}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque
            tempus ac eget diam et laoreet phasellus.
          </p>
          <Box className={classes.arrowbtns}>
            {shownavBtn && (
              <Button
                onClick={(e) => {
                  add__Slide(-1);
                  setonChange(!onchange);
                }}
                className={classes.arrowButton}
              >
                <ArrowBack className={classes.arrowBtn} />
              </Button>
            )}
            {shownavBtn && (
              <Button
                onClick={(e) => {
                  add__Slide(1);
                  setonChange(!onchange);
                }}
                className={classes.forwbtn}
              >
                <ArrowForward className={classes.arrowBtn} />
              </Button>
            )}
          </Box>
        </Box>
      </Box>
      {/* <Box > */}
      <div style={style} className="box">
        {/* <div>
            <Swipe
              onSwipeRight={() => {
                add__Slide(-1);
                setonChange(!onchange);
              }}
              onSwipeLeft={() => {
                add__Slide(1);
                setonChange(!onchange);
              }}
            >
              <div
                className=""
                style={{
                  borderRadius: radius,
                }}
              ></div>
            </Swipe>
          </div> */}
        {thmbnails && (
          <Box className={classes.carousel} id="thmbnail-div">
            {data.map((item, index_of) => {
              return (
                <img
                  width={thmbnailWidth ? thmbnailWidth : "300px"}
                  height={thmbnailWidth ? thmbnailWidth : "350px"}
                  src={item.image}
                  alt={item.caption}
                  className={classes.__image}
                  id={`thmbnail-${index_of}`}
                  key={index_of}
                  onClick={(e) => {
                    set__Slide(index_of);
                    setonChange(!onchange);
                  }}
                />
              );
            })}
          </Box>
        )}
      </div>
    </Box>
    // </Box>
  );
}
