import { makeStyles } from "@material-ui/core";
import image from "../../../../Assets/john-cameron-fGiJtgi2RRg-unsplash.jpg";

export const useStyles = makeStyles((theme) => ({
  secSlider: {
    backgroundImage: `url(${image})`,
    width: "100%",
    backgroundRepeat: "no-repeat",
    height: "100%",
    // display:"none",
    display: "flex",
    backgroundSize: "100%",
    backgroundPosition: "bottom",
    background: "cover",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: "1",
    [theme.breakpoints.down("")]: {
      height: "100%",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      zIndex: "-1",
      height: "100%",
      backgroundColor: "#ed4823ef",
      //   backgroundImage: "linear-gradient( #ed4823f3 99%, orange)",
    },
  },
  sliderBox: {
    width: "80%",
    // height: "800px",
    position: "relative",
    bottom: "100px",
    boxShadow: "2px 0px 10px",
    backgroundColor: "#f0ebeb",
    zIndex: "20",
    [theme.breakpoints.down("md")]: {
      bottom: "0px",
      width: "100%",
    },
  },
  DescriptedImage: {
    height: "525px",
    width: "100%",
    maxWidth: "600px",
    // overflowX: "hidden",

    // overflowX: "hidden",
    // flexGrow:"8",
    // overflowY: "hidden",
    zIndex: "2",

    [theme.breakpoints.down("md")]: {
      // display: "none",
    },
  },
  imgBox: {
    width: "100%",
    display: "flex",
    // paddingRight:"30px",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      // width: "50%",
      padding: "10px",

      justifyContent: "centers",
    },
  },
  __singleImage: {
    display: "flex",
    justifyContent: "between",
    alignItems: "center",
    position: "relative",
  },
  __captions: {
    position: "absolute",
    top: "0",
    left: "0",
  },

  imgDescription: {
    width: "100%",
    // maxWidth:"500px",
    height: "490px",
    // padding: "0px 50px",
    // paddingLeft: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      // padding: "0px",
      // maxwidth: "291px",
      // width: "100%",
    },
  },
  descripHeading: {
    paddingBottom: "20px",
    // marginLeft: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-strat",
    flexDirection: "column",
  },
  ___content: {
    margin: "40px 0px 0px 50px",
  },
  para: {
    fontSize: "12px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0px",
    },
  },

  imagees: {
    // width: "200px",
    height: "120px",
  },
  explorbtn: {
    marginTop: "50px",
    display: "flex",
    justifyContent: "space-between",
    paddingRight: "40px",
    paddingBottom: "40px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
    
    },
    alignItems: "center",
    flexDirection: "row-reverse",
    width: "100%",
    // maxWidth: "440px",
    // position: "relative",
  },
  btnAlign: {
    position: "absolute",
    left: "-65px",

    [theme.breakpoints.down("sm")]: {
      left: "30px",
    },
  },
  xplrbtn: {
    backgroundColor: "orange",
    width: "30px",
    height: "30px",
  },
  btnxp: { color: "white", fontSize: "10px" },
  arrowButton2: {
    fontSize: "12px",
    backgroundColor: "#a7a2a2",
    color: "white",
    "&:hover": {
      backgroundColor: "#ed4723",
    },
  },
  forwbtn2: {
    backgroundColor: "#a7a2a2",
    fontSize: "12px",
    marginLeft: "2px",
    color: "white",
    "&:hover": {
      backgroundColor: "#ed4723",
    },
  },

  btnBox: {
    display: "flex",
    backgroundColor: "gray",
  },
  explore: {
    display: "flex",
    width: "120px",
    fontWeight: "200",
    alignItems: "center",
    justifyContent: "space-between",
    // flexDirection:"row",
  },
  arrowBtn: {
    fontSize: "19px",
  },
  __sliderContainer: {
    [theme.breakpoints.down("sm")]:{
      maxWidth: "300px",
      height: "100px",

    },
    display: "flex",
    // backgroundC  : "gray",
    overflowX: "scroll",
    overflowY: "hidden",
    maxWidth: "600px",
    width: "100%",
    height: "200px",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "none",
      webkitBoxShadow: "none",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "transparent",
      // outline: '1px solid slategrey'
    },
    // color: "  red",
  },
  __images: {},
}));
