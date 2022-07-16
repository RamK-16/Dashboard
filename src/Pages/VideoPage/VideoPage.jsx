/* eslint-disable react-hooks/exhaustive-deps */
import { YouTube } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";

const Main = ({ setSelectedCategory, link }) => {
  useEffect(() => {
    setSelectedCategory(link);
  }, []);
  return (
    <>
      <Typography sx={{ color: "primary" }} variant="h4">
        <YouTube color="error"/> Video
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <iframe
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/hPr-Yc92qaY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Box>
    </>
  );
};

export default Main;
