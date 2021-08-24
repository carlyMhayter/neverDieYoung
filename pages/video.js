import ReactPlayer from "react-player/youtube";
import React from "react";

const Home = () => (
  <div className="page-content">
    <div className="page-title"> Video </div>
    <div className="content">
      <div className="tile">
        <div className="" id="video-container">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=lx1kwFJaZXs"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  </div>
);
export default Home;
