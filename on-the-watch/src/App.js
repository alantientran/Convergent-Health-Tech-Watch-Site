import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
//import Home from "./scenes/home"
import Dashboard from "./scenes/dashboard";
import Clients from "./scenes/client";
import ClientDetails from "./scenes/ClientDetails";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import Pie from "./scenes/pie";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/line" element={<Line />} />
              <Route path="/calendar" element={<Calendar vh_height={60} />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/person/:id" element={<ClientDetails />} />
              {/* Dynamic route for person details */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
