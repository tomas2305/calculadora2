import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Pantalla from "./Pantalla";
import Boton from "./Boton";
import data from "../data.json";
import { v4 as uuidv4 } from "uuid";
import { evaluate} from "mathjs";
import BotonBorrar from "./BotonBorrar";
import BotonReset from "./BotonReset";
import ModalError from "./ModalError";

export default function Calculadora() {
  const [cuenta, setCuenta] = useState("0");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  function manejarBotonClick(event) {
    const botonPresionado = event.target.outerText;

    if (cuenta === "0") {
      setCuenta(botonPresionado);
    } else if (botonPresionado === "=") {
      try {
        setCuenta(evaluate(cuenta).toString());
        } catch (error) {
          setOpen(true);
          setCuenta('0');
        }
    } else {
      setCuenta(cuenta + botonPresionado);
    }
  }

  function resetCuenta(event) {
    console.log("HOla");
    setCuenta("0");
  }

  function borrarUno(event) {
    if (cuenta !== "0") {
      let reduced = cuenta.slice(0, -1);
      if (reduced.length !== 0) {
        setCuenta(reduced);
      } else {
        setCuenta("0");
      }
    }
  }

  return (
    <Container
      sx={{
        backgroundColor: "#1290ff",
        height: 520,
        width: 400,
        border: "2px solid whitesmoke",
        borderRadius: 5,
        boxShadow: '-7px 2px white'
      }}
    >
      <Pantalla>{cuenta}</Pantalla>
      <ModalError open={open} handleOpen={handleOpen} handleClose={handleClose}/>
      <Grid container spacing={2}>
        <Grid item xs={8} key={uuidv4()}>
          <Box>
            <BotonBorrar manejarBorrar={borrarUno} />
          </Box>
        </Grid>
        <Grid item xs={4} key={uuidv4()}>
          <Box>
            <BotonReset manejarReset={resetCuenta} />
          </Box>
        </Grid>
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
