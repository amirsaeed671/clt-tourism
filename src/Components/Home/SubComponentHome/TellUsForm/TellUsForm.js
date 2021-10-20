import { Box, TextField, Button } from "@material-ui/core";
import { Mail } from "@material-ui/icons";
import React from "react";
import { useStyle } from "./Style";

export default function TellUsForm() {
  const classes = useStyle();
  return (
    <Box className={classes.__formContainer}>
      <Box className={classes.__formContent}>
        <h4 className={classes.heading}>FUIS GEPIBUS</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem,
        </p>
        <form className={classes.__Form}>
          <TextField
            InputProps={{
              classes: {
                input: classes.input,
              },
            }}
            color="white"
            variant="outlined"
            className={classes.search}
            // value=""
            // name=""
          />
          <Button
            // type="submit"
            variant="contained"
            disableElevation
            color="default"
            className={classes.__button}
            startIcon={<Mail />}
          >
            FUIS DAPUBUS
          </Button>
        </form>
      </Box>
    </Box>
  );
}
