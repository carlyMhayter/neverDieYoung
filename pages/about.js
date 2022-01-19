import Head from "next/head";
import Card from "components/Card";
import { aboutCardsInfo } from "utils/cardsData";

const bandMembers = [
  {
    name: "Tim Godwin",
    title: "Guitar, Vocals",
    photoID: "tim",
    bio: "Godwin has worked with such notable artists as Air Supply, Laura Brannigan, Shelby Lynne, Tanya Tucker in the house band for Fox’s Sunday Comics as well as numerous TV and Movie projects.",
    tileOrientation: "tile2  tile bio-tile",
  },
  {
    name: "David Sheils",
    title: "Vocals, Guitar",
    photoID: "dave",
    bio: "Sheils has worked with wide variety of artists including Chicago, Toto, Mary Travers, Tower of Power, Billy Vera, Pat Benatar and written songs for Billy Preston and Freda Payne.",
    tileOrientation: "tile1  tile bio-tile",
  },
  {
    name: "Michael Hayter",
    title: "Bass guitar, back-up vocals",
    photoID: "mike",
    bio: "Well known local San Diego musician joins Never Die Young on bass guitar.",
    tileOrientation: "tile2  tile bio-tile",
  },
  {
    name: "Al Cacas",
    title: "Drums, percussion",
    photoID: "al",
    bio: "A San Diego native also well known in the SD music scene, Al Cacas performs drums in Never Die Young.",
    tileOrientation: "tile1  tile bio-tile",
  },
  {
    name: "Kylea Sheils",
    title: "Vocals",
    photoID: "kylie",
    bio: "San Diego based singer/songwriter who has worked with Chicago, John Rayond and other notable artists.",
    tileOrientation: "tile2 tile bio-tile",
  },
];

const About = () => (
  <div className="page-content">
    <Head>
      <title>NDY - About</title>
    </Head>
    <h1 className="page-title">About </h1>
    <div className="content">
      {Object.keys(aboutCardsInfo).map(function (card, index) {
        return (
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
        );
      })}
    </div>
  </div>
);
export default About;
