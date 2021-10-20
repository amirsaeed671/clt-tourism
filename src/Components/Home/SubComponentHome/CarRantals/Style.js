import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  __carRantalContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "430px",

    margin: "50px 0px 0px 0px",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      textAlign:"center",
    },
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    height: "50px",
    zIndex: "2",
  },
  heading: {
    // padding: "0px 30px",
    fontSize: "40px",

    wordSpacing: "5px",
    color: "#ED4723",
    [theme.breakpoints.down("sm")]: {
      textAligh: "center",
      fontSize: "25px",
    },
  },
  __carCard: {
    width: "300px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "canter",
    zIndex: "1",
  },
  //   __carImage: {},
  __p: {
    textAlign: "center",
    zIndex: "3",
  },
  __cars: {
    display: "flex",
    // height: "190px",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    // overflow: "hidden",
    [theme.breakpoints.down("md")]:{
      justifyContent: "center",

    },
  },
  btn: {
    width: "200px",
    backgroundColor: "#ED4723",
    margin: "30px ",
    display: "flex",
    justifyContent: "center",
    // display: "none",
    alignItems: "center",

    color: "white",
    " &>*": {
      padding: "8px 10px",
    },
    "&:hover": {
      color: "#ED4723",
    },
  },
}));
