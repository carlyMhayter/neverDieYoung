import Head from 'next/head';
import Card from 'components/Card';
import { aboutCardsInfo } from 'utils/cardsData';

const About = () => (
  <div className="page-content">
    <Head>
      <title>NDY - About</title>
    </Head>
    <h1 className="page-title">About </h1>
    <div className="content">
      {Object.keys(aboutCardsInfo).map((card) => (
        <Card
          key={card}
          orientation={aboutCardsInfo[card].orientation}
          empText={aboutCardsInfo[card].empText}
          minEmpText={aboutCardsInfo[card].minEmpText}
          minorText={aboutCardsInfo[card].minorText}
          buttonLinkname={aboutCardsInfo[card].buttonLinkname}
          buttonText={aboutCardsInfo[card].buttonText}
          imgId={aboutCardsInfo[card].imgId}
          scroll={aboutCardsInfo[card].scroll}
        />
      ))}
    </div>
  </div>
);
export default About;
