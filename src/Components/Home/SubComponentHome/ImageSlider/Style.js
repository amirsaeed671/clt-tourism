import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  sliderContaner: {
    // padding: " 10px 10px",
    paddingLeft: "60px",
    paddingTop: "38px",
    paddingRight: "40px",

    height: "200px",
    width: "100%",
    maxWidth: "300px",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      alignItems: "ccenter",
    },
    justifyContent: "space-between",
    flexDirection: "column",
  },
  __sliderContaner: {
    width: "100%",
    maxWidth: "300px",
    padding: "33px",
  },
  width: "100%",
  slideImage: {
    height: "100%",
    position: "absolute",
    objectFit: "cover",
  },
  __btnContent: {
    display: "flex",
    justifyContent: "space-between",
    // alignItems:"center",
    flexDirection: "column",
    marginLeft: "36px",
    marginTop: "63px",
  },
  __slider: {
    borderTop: "1px solid gray",
    // marginBottom: "30px",
    // backgroundColor: "#ED4723",
    Width: "100%",
    maxwidth: "1000px",
    height: "450px",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      justifyContent: "space-evenly",
      // alignItems: "center",
      marginLeft: "30px",

      height: "600px",
    },
  },

  carousel: {
    width: "100%",
    /* z-index: 20; */
    display: "flex",
    maxWidth: " 1076px",
    justifyContent: "center",
    overflowX: "scroll",
    position: "relative",
    top: "-54px",
    zIndex: "20",
    [theme.breakpoints.down("md")]: {
      top: "0px",
      // padding: "0px 20px",
      // maxWidth: "506px",
      width: "100%",
    },
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
  },
  __image: {},
  items: {
    backgroundColor: "gray",
    [theme.breakpoints.down("md")]: {
      width: "200px",
    },
  },
  arrowbtns: {
    marginLeft: "auto",
    marginTop: "50px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  arrowButton: {
    backgroundColor: "#ED4723",
    fontSize: "12px",
    marginRight: "3px",
    "&:hover": {
      color: "#ED4723",
    },
    color: "white",
  },
  forwbtn: {
    color: "white",
    "&:hover": {
      color: "#ED4723",
    },

    backgroundColor: "#ED4723",
    "& > *": {},
  },
  sliderPara: {
    fontSize: "12px",
  },
  ///
  heading: {
    margin: "0px 0px 10px 0px",
  },
  sliders: {
    height: "300px",
  },

  ///
}));
