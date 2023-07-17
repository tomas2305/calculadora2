import { BackspaceRounded } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import React from "react";

export default function BotonBorrar(props) {

  return (
    <Button
      onClick={props.manejarBorrar}
      color="warning"
      type="button"
      size="large"
      variant="contained"
      sx={{ width: "100%", boxShadow: "-6px 1px #f7c9a1" }}
    >
      <BackspaceRounded sx={{marginRight:1}}/><Typography variant="p">Delete</Typography>
    </Button>
  );
}
