import { BorderColor, EventRepeat, FunctionsTwoTone } from "@mui/icons-material";
import { Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Pantalla from "./Pantalla";
import Boton from "./Boton";
import data from "../data.json";
import { v4 as uuidv4 } from "uuid";

export default function Calculadora() {
  const [cuenta, setCuenta] = useState(0);

  function manejarBotonClick(event) {
    const botonPresionado = event.target.outerText;
    if (cuenta === 0) {
      setCuenta(botonPresionado);
    }
    else{
      setCuenta(cuenta + botonPresionado);
    }
  }

  // function resetCuenta(){

  // }

  // function borrarUno(){

  // }

  return (  
    <Container
      sx={{
        backgroundColor: "#1290ff",
        height: 500,
        width: 400,
        border: "2px solid whitesmoke",
        borderRadius: 5,
      }}
    >
      <Pantalla>{cuenta}</Pantalla>
      <Grid container spacing={2} marginTop={5}>
        {data.botones.map((botonSimbolo) => (
          <Grid item xs={3} key={uuidv4()}>
            <Boton manejarBotonClick={() => manejarBotonClick}>
              <Typography variant="h5">{botonSimbolo}</Typography>
            </Boton>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
