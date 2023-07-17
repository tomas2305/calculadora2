import { Button, Typography } from "@mui/material";
import React from "react";
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";

export default function BotonReset(props) {
  return (
    <Button
      color="success"
      size="large"
      variant="contained"
      sx={{ width: "100%", boxShadow: "-6px 1px lightgreen" }}
      onClick={props.manejarReset}
    >
      <RestartAltRoundedIcon />
      <Typography variant="p">Reset</Typography>
    </Button>       
  );
}
