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
      mode: "dark"
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container className="App" sx={{ userSelect: "none" }}>
        <Typography variant="h1" align="center" marginY={7}>
          Calculadora
        </Typography>
        <Calculadora />
      </Container>
    </ThemeProvider>
  );
}

export default App;
