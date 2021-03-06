import Head from 'next/head';
import styles from '/styles/page-styles/songlist.module.scss';

const songTitles = [
  'Never Die Young',
  'Walking Man',
  'Carolina in My Mind',
  'Fire and Rain',
  'Sweet Baby James',
  'Country Road',
  'Shower the People',
  'Mexico',
  'Copperline',
  'You Can Close Your Eyes',
  'Something In The Way She Moves',
  "You've Got a Friend",
  'Steamroller',
  'How Sweet It Is To Be Loved By You',
  'Secret of life',
  'Brother Trucker',
  'Up on the Roof',
  'Teach Me Tonight',
  'Smiling Face',
  'Machine Gun Kelly',
  "Don't Let Me Be Lonely",
  'Everyday',
  'River',
  'Junkies Lament',
  "That's Why I'm Here",
  'Wandering',
  'Wichita Lineman',
];

const Songlist = () => (
  <div className="page-content">
    <Head>
      <title>NDY - Songlist</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="page-title"> Song List </div>
    <div className="content">
      <ul className={styles.container}>
        {songTitles.map((title) => (
          <li className={styles.songtitles} key={title}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
export default Songlist;
