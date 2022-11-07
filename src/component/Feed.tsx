import React from "react";
import Box from "@mui/material/Box";
import Post from "./Post";
import Post1 from "./Post1";
import Post2 from "./Post2";
import Post3 from "./Post3";
const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post2 />
      <Post />
      <Post1 />
      <Post3 />
    </Box>
  );
};
export default Feed;
