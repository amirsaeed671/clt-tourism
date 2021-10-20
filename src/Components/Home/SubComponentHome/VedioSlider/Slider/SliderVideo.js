import { Box } from "@material-ui/core";
import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import { images } from "../../ImageSlider/MyImageSLider/ImageSlider";
import { useStyle } from "../Style";
export default function SliderVideo() {
  const classes = useStyle();
  return (
    <>
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
        dots={false}
        showSides={true}
        sidesOpacity={0.7}
        sideSize={0}
        slidesToScroll={4}
        slidesToShow={5}
        scrollOnDevice={true}
      >
        {images.map((images) => (
          <Box className={classes.__ifram}>
            <iframe
              src="https://www.youtube.com/embed/hVTXu8SgVyE"
              title="YouTube video player"
              frameborder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen={true}
            ></iframe>
          </Box>
        ))}
      </InfiniteCarousel>
    </>
  );
}
