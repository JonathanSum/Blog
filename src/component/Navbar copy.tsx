import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { theme } from "../theme";

const StyledToobar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
});
const UserBox = styled(Box)({
  display: "flex",
  gap: "10px",
  alignItems: "center",
});
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToobar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Artificial intelligence
        </Typography>
        <CelebrationIcon sx={{ display: { xs: "block", sm: "block" } }} />

        <Icons>
          <UserBox onClick={(e) => setOpen(true)}>
            <Avatar
              sx={{ width: 40, height: 40 }}
              src="https://avatars.githubusercontent.com/u/21982975?s=400&u=ec63b30c21b21c418f0f6831154957c55c916c12&v=4"
            />
            <Typography variant="body1">Jonathan Sum</Typography>
          </UserBox>
        </Icons>
      </StyledToobar>
    </AppBar>
  );
};

export default Navbar;
