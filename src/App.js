import Sidebar from "./component/Sidebar";
import Home from "./component/Home";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./component/Navbar";
// import Add from "./component/Add";
import { useState } from "react";
import { Routes, Route } from "react-router";
import Exercices from "./view/Exercices";
import Wip from "./view/Wip";

const ex_name = [
  "micro1",
  "micro2",
  "micro_ex",
  "ngram",
  "mlp",
  "batch_norm",
  "backprop",
  "wave_net",
  "gpt2_part1",
  "gpt2_part2",
];

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row">
          <Sidebar setMode={setMode} mode={mode} />
          <Routes>
            <Route path="/" element=<Home /> />
            <Route path="/try" element=<Wip /> />
            {ex_name.map((ex) => (
              <Route
                key={`/${ex}`}
                path={`/${ex}`}
                element={<Exercices ex={ex} />}
              />
            ))}
          </Routes>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
