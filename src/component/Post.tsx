import React from "react";
import { IconButton, Typography, Checkbox } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import MoreVert from "@mui/icons-material/MoreVert";

const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            JS
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Jonathan Sum"
        subheader="September 14, 2018"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://camo.githubusercontent.com/cc7d06c954a20757da15cc4f9c762ccb420f95632a2c62967d50f5217c33c362/68747470733a2f2f666f72756d732e666173742e61692f75706c6f6164732f64656661756c742f6f726967696e616c2f33582f342f322f343230353830313737366639336265626133336261393731356139626133306364376265353233622e6a706567"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          The right column is the correct prediction, and the left column is the
          wrong prediction. It looks like my ML model can even do better than
          human labeling.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: red[500] }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default Post;
