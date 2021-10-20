import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  galleryContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between  ",

  },
  galleryTitle: {
    width: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-around",
      textAlign: "center",
    },
    height: "200px",
  },
  btn: {
    width: "300px",
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
  paragraph: {
    fontSize: "15px",
    color: "black",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      width: "300px",
    },
    // fontWeight: "lighter",
  },
  gallery: {
    width: "100%",
    padding: " 0px 120px",
    margin: "0 auto",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
  },
}));
