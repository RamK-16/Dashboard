/* eslint-disable react-hooks/exhaustive-deps */
import { PhotoCamera } from "@mui/icons-material";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import React, { useEffect } from "react";

const Photo = ({ setSelectedCategory, link }) => {
  useEffect(() => {
    setSelectedCategory(link);
  }, []);
  return (
    <>
      <Typography sx={{ color: "green" }} variant="h4">
        <PhotoCamera color="primary"/> Photo
      </Typography>
      <Box sx={{display: "flex", justifyContent:"center", maxWidth: "70%"}}>
        <ImageList cols={2}>
          <ImageListItem p="5px">
            <ImageListItem>
              <img
                sx={{ maxWidth: "600px" }}
                src="https://static-cse.canva.com/blob/847064/29.jpg"
                alt="photo1"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                sx={{ maxWidth: "600px" }}
                src="https://static-cse.canva.com/blob/847064/29.jpg"
                alt="photo1"
              />
            </ImageListItem>
          </ImageListItem>
          <ImageListItem>
            <img
              sx={{ maxWidth: "600px" }}
              src="https://static-cse.canva.com/blob/847064/29.jpg"
              alt="photo1"
            />
          </ImageListItem>
        </ImageList>
      </Box>
    </>
  );
};

export default Photo;
