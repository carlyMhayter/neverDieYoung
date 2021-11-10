import ReactPlayer from "react-player/vimeo";
import React from "react";
import Head from "next/head";

const Video = () => (
  <div className="page-content">
    <Head>
      <title>NDY - Video</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="page-title"> Video </div>
    <div className="content">
      <div className="tile">
        <div className="" id="video-container">
          <ReactPlayer
            url="https://vimeo.com/643688095"
            width="100%"
            height="100%"
            config={{
              vimeo: {
                playerOptions: {
                  title: true,
                  color: "ffbf60",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  </div>
);
export default Video;
