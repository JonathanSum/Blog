import { useState, useEffect } from "react";

import { Box, CircularProgress, Paper } from "@mui/material";
import Card from "@mui/material/Card";
import { IpynbRenderer } from "react-ipynb-renderer-katex";

// select jupyter theme
// import "react-ipynb-renderer-katex/dist/styles/chesterish.css";

// import "react-ipynb-renderer-katex/dist/styles/grade3.css";

// import "react-ipynb-renderer-katex/dist/styles/gruvboxd.css";
// import "react-ipynb-renderer-katex/dist/styles/gruvboxl.css";
// import "react-ipynb-renderer-katex/dist/styles/monokai.css";
// import "react-ipynb-renderer-katex/dist/styles/oceans16.css";
//import "react-ipynb-renderer-katex/dist/styles/onedork.css";
import "react-ipynb-renderer-katex/dist/styles/solarizedd.css";
// import "react-ipynb-renderer-katex/dist/styles/solarizedl.css";
import axios from "axios";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
const dict: { [key: string]: string } = {
  micro1: "/micro1.json",
  micro2: "/micro2.json",
  micro_ex: "/micro_ex.json",
  ngram: "/ngram.json",
  mlp: "/mlp.json",
  batch_norm: "/batch_norm.json",
  backprop: "/backprop.json",
  wave_net: "/wave_net.json",
  gpt2_part1: "/gpt2_part1.json",
  gpt2_part2: "/gpt2_part2.json",
};

// const dict_bookmark: { [key: string]: number } = {
//   micro1: 0,
//   micro2: 0,
//   micro_ex: 0,
//   ngram: -22200,
//   mlp: -558200,
//   batch_norm: -20400,
//   backprop: -4500,
// };
const title: { [key: string]: string } = {
  micro1: "Micro Autograd Engine 1",
  micro2: "Micro Autograd Engine 2",
  micro_ex: "Micro Autograd Engine Exercise",
  ngram: "Make More(N-gram)",
  mlp: "Make More(MLP)",
  batch_norm: "BatchNorm Activations & Gradients",
  backprop: "Backpropagation",
  wave_net: "WaveNet",
  gpt2_part1: "GPT Exercises Part 1",
  gpt2_part2: "GPT Exercises Part 2",
};
const Notebook = ({ link }: { link: string }) => {
  const [notebook, setNotebooks] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("loading", process.env.PUBLIC_URL + dict[link]);
    setLoading(true);
    axios
      .get(process.env.PUBLIC_URL + dict[link])
      .then((res) => {
        // console.log(res.data.cells.length > 0);
        setNotebooks(res.data);
        setLoading(false);
      })
      .catch((err: any) => console.log(err));
  }, [link]);
  return (
    <>
      <Box
        sx={{
          paddingLeft: {
            xs: 0, // theme.spacing(0)
            sm: 20, // theme.spacing(3)
            md: 20, // theme.spacing(5)
            lg: 0,
          },
          width: {
            xs: 500,
            md: 900,
            lg: 1200,
          },
        }}
        flex={4}
        p={2}
      >
        <Paper
          sx={{
            border: "none",
            boxShadow: "none",
            minWidth: 275,
            mx: "5px",
            textAlign: "center",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              {title[link]}
            </Typography>
          </CardContent>
        </Paper>
        <Card sx={{ margin: 5 }}>
          {loading ? (
            <CircularProgress />
          ) : (
            Object.keys(notebook).length > 0 && (
              <IpynbRenderer
                ipynb={JSON.parse(JSON.stringify(notebook))}
                syntaxTheme="darcula"
                language="python"
                bgTransparent={true}
                formulaOptions={{
                  texmath: {
                    delimiters: "dollars",
                    katexOptions: {
                      fleqn: false,
                    },
                  },
                }}
                mdiOptions={{
                  html: true,
                  linkify: true,
                }}
              />
            )
          )}
        </Card>
      </Box>
    </>
  );
};
export default Notebook;
