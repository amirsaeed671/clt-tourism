import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  ///////////
  map_cinatainer: {
    width: "100%",
    height: "500px",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      height: "1900px",
      width: "100%",
    },
  },

  map: {
    width: "50%",
    // maxWidth: "600px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      // flexDirection: "row",
      width: "100%",
    },
  },
  mapLeftContent: {
    display: "flex",
    width: "50%",
    height: "500px",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
    paddingTop: "50px",
    [theme.breakpoints.down("md")]: {
      // flexDirection: "column",
      justifyContent: "space-aroun",
      height: "1282px",
      width: "100%",
      // flexDirection: "row",
    },
    // paddingLeft:"30px",
  },
  __text: {
    margin: "30px 40px 30px 30px ",
  },
  h4: {
    paddingBottom: "30px",
    paddingLeft: "30px",
  },
  p: {
    fontWeight: "400",
    paddingLeft: "30px",
  },
  img: {
    width: "100%",
    maxWidth: "300px",
    height: "300px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      height: "700px",
    },
  },
  imgbtnSection: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  __subcontent: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "100%",
    maxWidth: "328px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "428px",
      padding: "20px",
      height: "243px",
      alignItems: "center",
      textAlign: "center",
    },
  },
  subContentMap: {
    backgroundColor: "gray",
  },
  __btn: {
    width: "150px",
    backgroundColor: "#ED4723",
    margin: "10px 0px",

    color: "white",
    " &>*": {
      padding: "8px 10px",
    },
    "&:hover": {
      color: "#ED4723",
    },
  },
  button: {
    color: "gray",
    " &>*": {
      padding: "8px 10px",
    },
    "&:hover": {
      color: "#ED4723",

    },
  },
  __p:{
    width:"100%",
    maxWidth:"300px",
    fontWeight:"lighter",
  }
}));
