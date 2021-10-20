import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  filterConataner: {
    width: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "column",
    height: "auto",
    marginTop: "65px",
    marginLeft: "65px",

    [theme.breakpoints.down("md")]: {
      // marginTop: "0px",
      width: "99%",
      flexDirection: "column",
      flexDirection: "row-reverse",
      marginLeft: "0px",
    },
    "&::placeholder": {
      fontSize: "10px",
    },
  },

  buttons: {
    width: "70%",
    display: "flex",
    borderRadius: "20px",
    justifyContent: "space-between",
    position: "relative",
    top: "20px",
    alignItems: "flex-start",
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      flexDirection: "column",
      top: "0px",
      height: "268px",
      marginTop:"5px",
      alignItems: "center",
    },
  },
  searchFeild: {
    backgroundColor: "white",
    width: "98%",
    paddingLeft: "50px",
    display: "flex",
    // display:"none",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: "0px 10px",
    borderRadius: "11px",
    height: "130px",

    [theme.breakpoints.down("md")]: {
      height: "auto",
      padding: "0px 20px",
    backgroundColor: "transparent",

      // marginLeft: "25px",

      width: "90%",

      // flexDirection: "column",
    },
  },
  searchBox: {
    width: "97%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      margin: "0px",
      height: "280px",
      width: "auto",
      
    },
    "& > *": {
      backgroundColor: "#80808033",
    },
  },

  noBorder: {
    border: "none",
  },

  search: {
    width: "25%",
    maxWidth: "300px",
    // minWidth: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      maxWidth: "500px",

      "& .MuiFormLabel-root": {
        color: "black", // or black,
        fontSize: "10px",

        overflowX: "hidden",
      },
      [theme.breakpoints.down("sm")]: {
        "& .MuiFormLabel-root": {
          fontSize: "8px",
        },
        width: "100%",
      },
    },
  },
  input: {
    fontSize: "20px",
    padding: "16px 5px",
    [theme.breakpoints.down("md")]: {
      // padding: "16px 10px",
      width: "140px",

      // fontSize: "10px",
    },
  },

  searchBtn: {
    "& > *": {
      width: "120px",
      padding: "11px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "3px 5px",
      // padding: "5px 0px",
      // width: "50%",
      // borderRadius: "20px",
      margin: "0 auto",
    },
  },
  btn1: {
    "&:hover": {
      backgroundColor: "#ED4723",
      color: "white",
    },
    maxWidth: "200px",
    width: "100%",
    fontSize: "25px",
    textTransform: "none",
    borderRadius: "10px",
    padding: "20px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      padding: "12px",
      maxWidth: "100px",
      // margin: "10px 20px",
    },

    backgroundColor: "white",
  },
  btn2: {
    "&:hover": {
      color: "white",
      backgroundColor: "#ED4723",
    },
    width: "100%",
    maxWidth: "200px",
    fontSize: "25px",
    textTransform: "none",
    borderRadius: "10px",
    padding: "20px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      padding: "10px 12px",
      maxWidth: "100px",
      // margin: "0px 10px",
    },

    backgroundColor: "white",
  },
  btn3: {
    "&:hover": {
      color: "white",
      backgroundColor: "#ED4723",
    },
    width: "100%",
    maxWidth: "200px",
    fontSize: "25px",
    textTransform: "none",
    borderRadius: "10px",
    padding: "20px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      padding: "10px 12px",
      maxWidth: "100px",
      // margin: "0px 10px",
    },

    backgroundColor: "white",
  },
  btn4: {
    "&:hover": {
      color: "white",
      backgroundColor: "#ED4723",
    },
    maxWidth: "200px",
    width: "100%",
    fontSize: "25px",
    textTransform: "none",
    borderRadius: "10px",
    padding: "20px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      padding: "10px 12px",
      maxWidth: "100px",
      // margin: "0px 10px",
    },

    backgroundColor: "white",
  },
}));
