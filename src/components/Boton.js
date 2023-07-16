import { Button } from "@mui/material";
import React from "react";

export default function Boton(props) {
  return (
    <Button
      color="error"
      size="large"
      type="button"
      variant="contained"
      sx={{ boxShadow: "-6px 1px white", height: "64px", marginLeft: 1 }}
      onClick={props.manejarBotonClick()}
    >
      {props.children}
    </Button>
  );
}
