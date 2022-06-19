import Card from 'components/Card';
import ReactPlayer from 'react-player/youtube';
import React from 'react';
import Head from 'next/head';
import { homeCardsInfo } from '../utils/cardsData';
import styles from '../styles/page-styles/index.module.scss';

const Home = () => (
  <>
    <div className="master-container">
      <Head>
        <title>Never Die Young - Home</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.cover}>
        <img
          className={styles.coverlogo}
          src="/never-die-young-logo-lessOrnate3.svg"
          alt="never die young text logo"
        />
      </div>
      <div className="content">
        <a href="/upcoming" className={styles.ticketlink}>
          - GET TICKETS -
        </a>
        {/* Video Tile */}
        <div className="tile">
          <div className={styles.video}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=N9sibbBex3s"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        {Object.keys(homeCardsInfo).map((card) =>
          console.log(`index: ${homeCardsInfo[card].buttonLinkname}`),
        )}
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
