import Card from 'components/Card';
import ReactPlayer from 'react-player/youtube';
import React from 'react';
import Head from 'next/head';
import { homeCardsInfo } from '../utils/cardsData';

const Home = () => (
  <>
    <div className="master-container">
      <Head>
        <title>Never Die Young - Home</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="cover">
        <img
          className="cover-logo"
          src="/never-die-young-logo-lessOrnate2.svg"
          alt="never die young text logo"
        />
      </div>
      <div className="content">
        <a href="/upcoming" className="frontpage-ticket-link">
          - GET TICKETS -
        </a>
        {/* Video Tile */}
        <div className="tile">
          <div className="" id="video-container">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=VZ2oIhpo5Sg"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        {Object.keys(homeCardsInfo).map((card) => (
          <Card
            key={card}
            orientation={homeCardsInfo[card].orientation}
            empText={homeCardsInfo[card].empText}
            minEmpText={homeCardsInfo[card].minEmpText}
            minorText={homeCardsInfo[card].minorText}
            buttonLinkname={homeCardsInfo[card].buttonLinkname}
            buttonText={homeCardsInfo[card].buttonText}
            imgId={homeCardsInfo[card].imgId}
            scroll={homeCardsInfo[card].scroll}
          />
        ))}
      </div>
    </div>
  </>
);
export default Home;
