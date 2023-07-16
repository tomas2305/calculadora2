import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function Pantalla(props) {
  return (
    <Box
      sx={{
        backgroundColor: "#1b1b2f",
        boxShadow: "-7px 1px lightblue;",
        overflow: "hidden",
        height: 70,
        textAlign:'center',
        paddingTop: 1
      }}
      my={3}
    >
      <Typography variant="h3">{props.children}</Typography>
    </Box>
  );
}
