import { Box, Button } from "@material-ui/core";
import React from "react";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import NavData from "../Header/navData/NavData";
import { useStyle } from "./Style";
import logo from "../../Assets/XLT.png";
import { ArrowForward } from "@material-ui/icons";
export default function Footer() {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.__footerContainer}>
        <Box className={classes.__footerContent}>
          <Box className={classes.__logoContent}>
            <img src={logo} alt="logo" className={classes.__logo} />
            <p className={classes.___P}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Lorem Ipsum is simply dummy text of the print
            </p>
            <Box>
              <a>
                <img
                  className={classes.__circle}
                  src="https://img.icons8.com/ios-glyphs/30/000000/facebook.png"
                />
              </a>
              <a>
                {" "}
                <img
                  className={classes.__circle}
                  src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png"
                />
              </a>
              <a>
                {" "}
                <img
                  className={classes.__circle}
                  src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png"
                />
              </a>
              {/* <RadioButtonUncheckedIcon className={classes.__circle} />
              <RadioButtonUncheckedIcon className={classes.__circle} />
              <RadioButtonUncheckedIcon className={classes.__circle} /> */}
            </Box>
          </Box>
          <Box className={classes.__subContent}>
            <h4 className={classes.__h4}>Quick Links</h4>

            {NavData.map((data) => (
              <Button
                startIcon={<ArrowForward className={classes.btnIcon} />}
                className={classes.btn}
              >
                {data.title}
              </Button>
            ))}
          </Box>
          <Box className={classes.__subContent}>
            <h4 className={classes.__h4}> Quick Links</h4>

            {NavData.map((data) => (
              <Button
                className={classes.btn}
                startIcon={<ArrowForward className={classes.btnIcon} />}
              >
                {data.title}
              </Button>
            ))}
          </Box>
          <Box className={classes.___contact}>
            <h4>Contact Us</h4>

            <p className={classes.___P}>
              Feel free to get in touch ith us via phone or send us a text
              massage
            </p>
            <p>
              1 800 123 1234 <span>email@ebsite.com</span>
            </p>
          </Box>
        </Box>
      </Box>
    </>
  );
}
