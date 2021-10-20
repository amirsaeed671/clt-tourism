import { makeStyles } from "@material-ui/core";
const width = "450px";
// const values = {
//   xs: 0,
//   sm: 600,
//   md: 960,
//   lg: 1280,
//   xl: 1920,
// };

// const theme = {
//   breakpoints: {
//     keys: ['xs', 'sm', 'md', 'lg', 'xl'],
//     up: key => `@media (min-width:${values[key]}px)`,
//   },
// };

export const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "black",
    height: "100px",
    width: "100%",
    display: "flex !important",
    justifyContent: "space-between",
    padding: "0 50px",

    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
    alignItems: "center",
  },
  root: {
    // flexGrow: 1,
  },

  contact_container: {
    display: "flex",
    justifyContent: "space-evenly",
    color: "white",
    // paddingLeft: "0px",
    width: "100%",
    alignItems: "center",
    maxWidth: "600px",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    color: "white",
    // backgroundColor:"blue",
    width: `${width}`,
    alignItems: "center",
    maxWidth: "600px",
  },
  Links: {
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
    "&:hover": {
      color: "white",
      // width: ,
      backgroundColor: "#ED4723",
      // padding: `5px`,
      transition: "all 0.5s ease-in-out ",
      zIndex: "30",
    },
  },
  // menu: {
  //   width: "100%",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   // marginRight: "10px",
  // },
  menuContainer: {
    width: "200px",
    fontSize: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuButton: {
    fontSize: "30px",
    color: "white",
  },
  mbDevice: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mbDevice1: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    backgroundColor: "#ED4723",
    width: "40px",
    height: "40px",
    marginRight: "20px",

    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contact: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  nav: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  sideBar: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  contactInfo: {
    display: "flex",
    maxWidth: "440px",
    paddingRight: "10px",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0px",
    },
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  number: {
    display: "flex",
    width: "180px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    alignItems: "center",
    marginRight: "20px",
    justifyContent: "space-evenly",
  },
  email: {
    display: "flex",
    // width:"250px",

    alignItems: "center",
    justifyContent: "space-evenly",
  },
  logo: {
    width: "223px",
    height: "170px",
    /* background-color: gray, */
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "20px",
    [theme.breakpoints.up("sm")]: {
      marginRight: "0px",
    },
    marginRight: "30px",
  },
  // // contactInfo: {
  // //   [theme.breakpoints.down("sm")]: {
  // //     display: "none",
  // //   },
  // },
  menue: {
    fontSize: "50px",
    marginRight: "20px",
    padding: "0px !important",
  },
}));
