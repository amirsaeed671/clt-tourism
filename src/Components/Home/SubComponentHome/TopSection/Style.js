import img from "../../../../Assets/demopick.jpg";
import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  home_contaner: {
    backgroundImage: `url(${img})`,
    width: "100%",
    backgroundRepeat: "no-repeat",
    height: "700px",
    maxHeight: "100%",
    backgroundSize: "100%",
    backgroundPosition: "bottom",
    background: "cover",
    position: "relative",
    flexWrap: "wrap",
    zIndex: "1",
    // [theme.breakpoints.up("md")]:{
    // flexDirection: "row",
    // backgroundColor:"gray",

    // },

    "&::before": {
      content: '""',
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      zIndex: "-1",
      height: "100%",
      // backgroundColor: ",

      backgroundImage: "linear-gradient(red,#edad23ef)",
    },
  },
  container: {
    display: "flex",
    width: "40%",
    flexDirection: "column",
    height: "300px",
    marginLeft: "100px",
    // paddingBottom: "60px",

    zIndex: "2",
    alignItems: "flex-start",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      marginLeft: "30px",
    },
  },
  heading: {
    fontSize: "25px",
    marginTop: "30px",

    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      width: "300px",
      marginTop: "20px",
    },
    color: "white",
  },
  paragraph: {
    fontSize: "15px",
    color: "white",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      width: "300px",
    },
    fontWeight: "lighter",
    // padding: "10px 0px",
  },
  root: {
    "& > *": {
      margin: `10px 20px`,
    },
    // margin: "40px 0px",

    borderRadius: "100px",
    fontSize: "10px",
    backgroundColor: "white",
    color: "black",

    "&:hover": {
      color: "white",
      backgroundColor: "#ED4723",
    },
  },
}));
