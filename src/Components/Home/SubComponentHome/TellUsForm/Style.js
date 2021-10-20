import { makeStyles } from "@material-ui/core";
import img from "../../../../Assets/getty.jpg";
export const useStyle = makeStyles((theme) => ({
  __formContainer: {
    backgroundImage: `url(${img})`,
    width: "100%",
    backgroundRepeat: "no-repeat",
    height: "300px",
    maxHeight: "100%",
    backgroundSize: "100%",
    backgroundPosition: "bottom",
    background: "cover",
    position: "relative",
    flexWrap: "wrap",
    display: "flex",
    [theme.breakpoints.up("md")]: {
      flexDirection: "column",
    },
    alignItems: "center",
    justifyContent: "center",
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
      // backgroundColor: "#ed4823ef",
      backgroundImage: "linear-gradient(#c4200adc,#ac250ddc)",
    },
  },
  __formContent: {
    height: "120px",
    width: "100%",
    maxWidth: "900px",
    display: "flex",
    color: "white",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
      // maxWidth:"311px",
    width: "90%",

      justifyContent: "center",
      alignItems: "center",
    },
  },
  __Form: {
    // maxWidth: "800px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",

    },
  },
  input: {
    fontSize: "15px",
    padding: "20px 20px",
    // marginLeft: "20px",
  },
  __button: {
    width: "220px",
    color: "red",
    marginLeft: "20px",
    padding: "15px 0px",
    [theme.breakpoints.down("md")]:{
      maxWidth:"170px",
    }
  },
  search: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: "5px",
    // maxWidth: "300px",
    [theme.breakpoints.down("md")]: {
      margin: "10px",
      // minWidth: "270px",
      // minWidth: "90%",
    },
  },
  heading: {
    fontWieght: "bolder",
  },
}));
