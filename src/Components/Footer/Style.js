import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  __footerContainer: {
    width: "100%",
    height: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      maxHeight:"1200px",


    },
  },
  __footerContent: {
    // [theme.breakpoints.down("sm")]: {
    //   flexDirection: "column",

    //   },

    margin: "250px 50px",
    width: "100%",
    display: "wrap",
    maxwidth: "500px",
    flexWrap: "wrap",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    color: "black",

    justifyContent: "space-evenly",
  },
  __subContent: {
    width: "100%",
    maxWidth: "200px",
    height: "250px",
    display: "flex",
    flexWrap: "wrap",
    marginTop: "10px",
    justifyContent: "space-between",
    flexDirection: "column",

    alignItems: "flex-start",
    // margin: "0px 0px 0px 20px",
  },
  __logo: {
    width: "200px",
    height: "90px",
    /* background-color: gray, */
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingTop: "20px",
    [theme.breakpoints.up("sm")]: {},
    //   marginRight: "0px",
    // marginRight: "30px",
  },

  __logoContent: {
    width: "100%",
    maxWidth: "250px",
    height: "250px",
    display: "flex",
    // flexWrap: "wrap",
    justifyContent: "space-between",

    flexDirection: "column",
    alignItems: "flex-start",
    // margin: "0px 0px 0px 20px",
  },
  ___contact: {
    width: "100%",
    maxWidth: "250px",
    height: "300px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginBottom: "50px",
    flexDirection: "column",
    alignItems: "flex-start",
    // margin: "0px 0px 0px 20px",
  },
  btn: {
    // color: "black",
    color: "black",
    "& > *": {
      fontWeight: "200",
    },
    "&:hover": { color: "#ED4723" },
  },
  ___P: {
    color: "gray",
    fontWeight: "200",
  },
  btnIcon: {
    color: "gray",

    fontWeight: "lighter",
  },
  __p: {
    fontWeight: "lighter",
    fontSize: "12px",
  },
  __h4: {
    marginBottom: "10px",
  },
  __circle: { color: "orange", fontSize: "35px", fontWeight: "200" },
  __bottom: {
    width: "100%",
    display: "flex",
    height: "30px",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 40px",
    color: "white",
    fontWeight: "lighter",
    backgroundColor: "#ED4723",
    [theme.breakpoints.down("sm")]:{
      fontSize:"5px",
    },
    
  },
  __span: {
    display: "flex",
    width: "100%",
    maxWidth: "250px",
    justifyContent: "space-between",
    alignItems: "center",

  },
}));
