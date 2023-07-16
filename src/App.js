import {
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import "./App.css";
import Calculadora from "./components/Calculadora";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container className="App" >
        <CssBaseline />
        <Typography variant="h1" align="center" marginY={7} sx={{userSelect: 'none'}}>
          Calculadora
        </Typography>
        <Calculadora />
      </Container>
    </ThemeProvider>
  );
}

export default App;
