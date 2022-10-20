import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
} from "@mui/material";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { theme } from "../theme";
import { Mail, Notifications } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const StyledToobar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
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
          Artifical Intellgence
        </Typography>
        <CelebrationIcon sx={{ display: { xs: "block", sm: "block" } }} />
        <Search>
          <InputBase placeholder="Search..."></InputBase>
        </Search>
        <Icons>
          {/* <Badge badgeContent={4} color="error">
            <Mail></Mail>
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications></Notifications>
          </Badge> */}
          <UserBox onClick={(e) => setOpen(true)}>
            <Avatar
              sx={{ width: 40, height: 40 }}
              src="https://avatars.githubusercontent.com/u/21982975?v=4"
            />
            <Typography variant="body1">Jonathan Sum</Typography>
          </UserBox>
        </Icons>
      </StyledToobar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
