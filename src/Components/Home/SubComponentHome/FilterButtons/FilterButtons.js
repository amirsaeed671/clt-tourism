import { Button, TextField, Box } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Style";
export default function FilterButtons() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.filterConataner}>
        <Box className={classes.buttons}>
          <Button disableElevation variant="contained" className={classes.btn1}>
            Flight
          </Button>
          <Button disableElevation variant="contained" className={classes.btn2}>
            Stay
          </Button>
          <Button disableElevation variant="contained" className={classes.btn3}>
            Tourism
          </Button>
          <Button disableElevation variant="contained" className={classes.btn3}>
            Cars
          </Button>
        </Box>
        <Box className={classes.searchFeild}>
          <Box className={classes.searchBox}>
            <TextField
              className={classes.search}
              InputProps={{
                classes: {
                  input: classes.input,
                },
              }}
              id="filled-basic"
              
              label="YOUR BOOKING
"
              variant="outlined"
            />
            <TextField
              className={classes.search}
              id="filled-basic"
              
              label="DATES OF BOOKING
"
              InputProps={{
                classes: {
                  input: classes.input,
                },
              }}
              variant="outlined"
            />
            <TextField
              className={classes.search}
              InputProps={{
                classes: {
                  input: classes.input,
                },
              }}
              id="filled-basic"
              
              label="NO. OF PEOPLE ADULT & KIDS
"
              variant="outlined"
            />

            <Button
              className={classes.searchBtn}
              size="large"
              variant="text"
              color="primary"
              size="medium"
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
