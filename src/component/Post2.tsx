import React from "react";
import { IconButton, Typography, Checkbox, Link } from "@mui/material";
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
import img from "./img1.jpg";
const Post2 = () => {
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
        subheader="October 20, 2022"
      />
      <CardMedia component="img" height="20%" image={img} alt="img1" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Let's hope this series of videos will improve my NLP skill, so I will
          be able to solve my own NLP problem. It is the problem I personally
          want to solve.
        </Typography>
        <Link href="https://jonathansum.github.io/">More detail</Link>
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
export default Post2;
