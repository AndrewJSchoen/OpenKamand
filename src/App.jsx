import { ThemeProvider, createTheme } from "@mui/material/styles";
import { NavBar } from "./components/NavBar";
import { Settings } from "./components/Settings";
import { useAtomValue } from "jotai";
import { connectionAtom } from "./state";

const kamadoColor = "#e2231a";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: kamadoColor,
    },
  },
});

function App() {

  const connected = useAtomValue(connectionAtom);
  
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <Settings open={!connected} onClose={()=>{}}/>
    </ThemeProvider>
  );
}

export default App;
