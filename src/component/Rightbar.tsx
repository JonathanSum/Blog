import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  Typography,
  ImageListItem,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";

const Rightbar = () => {
  return (
    <Box
      bgcolor="lightcoral"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://avatars.githubusercontent.com/u/21982975?v=4.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://avatars.githubusercontent.com/u/21982975?v=4.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://avatars.githubusercontent.com/u/21982975?v=4.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://avatars.githubusercontent.com/u/21982975?v=4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://avatars.githubusercontent.com/u/21982975?v=4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://avatars.githubusercontent.com/u/21982975?v=4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://avatars.githubusercontent.com/u/21982975?v=4.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList cols={2} rowHeight={200} gap={5}>
          <ImageListItem>
            <img
              src="https://camo.githubusercontent.com/cc7d06c954a20757da15cc4f9c762ccb420f95632a2c62967d50f5217c33c362/68747470733a2f2f666f72756d732e666173742e61692f75706c6f6164732f64656661756c742f6f726967696e616c2f33582f342f322f343230353830313737366639336265626133336261393731356139626133306364376265353233622e6a706567"
              alt="pic"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://camo.githubusercontent.com/cc7d06c954a20757da15cc4f9c762ccb420f95632a2c62967d50f5217c33c362/68747470733a2f2f666f72756d732e666173742e61692f75706c6f6164732f64656661756c742f6f726967696e616c2f33582f342f322f343230353830313737366639336265626133336261393731356139626133306364376265353233622e6a706567"
              alt="pic"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://camo.githubusercontent.com/cc7d06c954a20757da15cc4f9c762ccb420f95632a2c62967d50f5217c33c362/68747470733a2f2f666f72756d732e666173742e61692f75706c6f6164732f64656661756c742f6f726967696e616c2f33582f342f322f343230353830313737366639336265626133336261393731356139626133306364376265353233622e6a706567"
              alt="pic"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100}>
          Latest Conversations
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
