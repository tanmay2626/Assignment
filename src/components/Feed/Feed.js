import React from "react";
import "../../styles/Feed.css";
import Banner from "./Banner";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import FeedNews from "./FeedNews";

const Feed = (props) => {
  return (
    <div className="feed">
      <Banner />
      <FeedNews />
      <Divider
        sx={{
          "&::before, &::after": {
            borderColor: "#FEB139",
          },
        }}
        textAlign="left"
      >
        <Chip
          sx={{ border: "solid 2px #FEB139", backgroundColor: "#FEF9A7" }}
          label="मनोरंजन"
        />
      </Divider>
      <FeedNews />
      <Divider
        sx={{
          "&::before, &::after": {
            borderColor: "#FEB139",
          },
        }}
        textAlign="left"
      >
        <Chip
          sx={{ border: "solid 2px #FEB139", backgroundColor: "#FEF9A7" }}
          label="व्यापार"
        />
      </Divider>
      <FeedNews />
    </div>
  );
};

export default Feed;
