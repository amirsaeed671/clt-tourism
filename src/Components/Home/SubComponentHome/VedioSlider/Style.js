import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  __vedioSlider: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    // height: "500px",
  },
  __vedioSlier_Button: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    // flexDirection: "",
    height: "100px",
  },
  btn: {
    width: "200px",
    backgroundColor: "#ED4723",
    margin: "30px 0px 0px 0px",

    color: "white",
    " &>*": {
      padding: "8px 10px",
    },
    "&:hover": {
      color: "#ED4723",
    },
  },
  __vedioContainer: {
    width: "100%",
    height: "100px",
    margin: "30px 0px",
  },
  __ifram:{
    width: "430px",
    // backgroundColor: red,
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
  }
}));





