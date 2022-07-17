import React from "react";
import FeedNewsCard from "./FeedNewsCard";

const Entertainment = (props) => {
  return (
    <div className="feed-wrap">
      <div className="news-wrap">
        <div className="news-left">
          {[...Array(4)].map((item, i) => {
            return <FeedNewsCard key={i} />;
          })}
        </div>
        <div className="news-right">
          <div className="feed-ad-poster">
            <img
              alt="poster"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJUnbyEJzOGCWEVaJieNrxZyZP7naprUOkA&usqp=CAU"
            />
          </div>
          {[...Array(2)].map((item, i) => {
            return <FeedNewsCard key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
