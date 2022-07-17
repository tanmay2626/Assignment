import * as React from "react";
import "../../styles/Feed.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const Banner = () => {
  return (
    <div className="banner">
      <Card sx={{ position: "relative", borderRadius: 2 }}>
        <CardMedia
          component="img"
          height="250"
          image="https://www.zambianguardian.com/wp-content/uploads/2022/01/Types-of-Administrative-Law.jpg"
          alt="green iguana"
        />
        <div className="banner-overlay">
          <div className="banner-overlay-button">
            <ArrowCircleLeftOutlinedIcon sx={{ fontSize: 30, padding: 2 }} />
          </div>
          <div className="banner-overlay-title">
            <strong>
              बरेली के मेडिसिटी अस्पताल के डॉक्टर समेत चार पर केस दर्ज
            </strong>
          </div>
          <div className="card-overlay-button">
            <ArrowCircleRightOutlinedIcon sx={{ fontSize: 30, padding: 2 }} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Banner;
