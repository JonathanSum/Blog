import Sidebar from "./component/Sidebar";
import Feed from "./component/Feed";
// import Rightbar from "./component/Rightbar";
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
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Routes>
            <Route path="/" element=<Feed /> />
            <Route path="/try" element=<Wip /> />
            {ex_name.map((ex) => (
              <Route
                key={`/${ex}`}
                path={`/${ex}`}
                element={<Exercices ex={ex} />}
              />
            ))}
          </Routes>
          {/* <Rightbar /> */}
        </Stack>
        {/* <Add /> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
