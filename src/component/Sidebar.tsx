import React from "react";
import { Box, Button, Drawer, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import Switch from "@mui/material/Switch";
import { Link as RouterLink } from "react-router-dom";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
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
type Anchor = "top" | "left" | "bottom" | "right";
const Sidebar = ({ mode, setMode }: { mode: string; setMode: any }) => {
  // we put another fixed there below another box to avoid overlapping with the Post complement.

  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to={`/${ex_name[0]}`}>
            <ListItemIcon>
              <HistoryEduIcon
                sx={{
                  mb: 2,
                  display: "flex",
                  alignItems: "top",
                  flexWrap: "wrap",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Micrograd(1)"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Auto-diff Engine
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to={`/${ex_name[1]}`}>
            <ListItemIcon>
              <HistoryEduIcon
                sx={{
                  mb: 2,
                  display: "flex",
                  alignItems: "top",
                  flexWrap: "wrap",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Micrograd(2)"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Auto-diff Engine
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to={`/${ex_name[2]}`}>
            <ListItemIcon>
              <HistoryEduIcon />
            </ListItemIcon>
            <ListItemText primary="Micrograd Exercise" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to={`/${ex_name[3]}`}>
            <ListItemIcon>
              <HistoryEduIcon />
            </ListItemIcon>
            <ListItemText primary="Make More(N-gram)" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to={`/${ex_name[4]}`}>
            <ListItemIcon>
              <HistoryEduIcon />
            </ListItemIcon>
            <ListItemText primary="Make More(MLP)" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to={`/${ex_name[5]}`}>
            <ListItemIcon>
              <HistoryEduIcon
                sx={{
                  mb: 2,
                  display: "flex",
                  alignItems: "top",
                  flexWrap: "wrap",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="BatchNorm"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Activations & Gradients
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to={`/${ex_name[6]}`}>
            <ListItemIcon>
              <HistoryEduIcon />
            </ListItemIcon>
            <ListItemText primary="Backpropagation " />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to={`/${ex_name[7]}`}>
            <ListItemIcon>
              <HistoryEduIcon />
            </ListItemIcon>
            <ListItemText primary="WaveNet " />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to={`/${ex_name[8]}`}>
            <ListItemIcon>
              <HistoryEduIcon
                sx={{
                  mb: 2,
                  display: "flex",
                  alignItems: "top",
                  flexWrap: "wrap",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="GPT Exercises Part1"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Auto-diff Engine
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to={`/${ex_name[9]}`}>
            <ListItemIcon>
              <HistoryEduIcon
                sx={{
                  mb: 2,
                  display: "flex",
                  alignItems: "top",
                  flexWrap: "wrap",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="GPT Exercises Part2"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Auto-diff Engine
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="/try">
            <ListItemIcon>
              <HistoryEduIcon
                sx={{
                  mb: 2,
                  display: "flex",
                  alignItems: "top",
                  flexWrap: "wrap",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Try Now!"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Run the Make More
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="https://jonathansum.github.io/">
            <ListItemIcon>
              <HistoryEduIcon />
            </ListItemIcon>
            <ListItemText primary="About Me" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ModeNightIcon />
            </ListItemIcon>
            <Switch
              onChange={(e) => {
                setMode(mode === "light" ? "dark" : "light");
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Box sx={{ flexDirection: "column" }}>
              <KeyboardDoubleArrowRightIcon />
              <br />
              <br />
              <br />
              <br />
              M
              <br />
              E
              <br />
              N
              <br />U
            </Box>{" "}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list()}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Sidebar;
