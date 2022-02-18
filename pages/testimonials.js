import Head from 'next/head';
import styles from '/styles/page-styles/testimonials.module.scss';
import Carousel from '../components/Carousel';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const testimonials = [
  {
    name: 'Danny Reyes/Percussionist, Zach Brown Band',
    text: 'The music of James Taylor presented with authenticity and musical brilliance. I’m a big fan! ',
  },
  {
    name: 'John Raymond/Guitarist, Kenny G',
    text: 'The Real Deal',
  },
  {
    name: 'Damian DeRobbio, Belly Up Tavern, Solana Beach, California',
    text: 'Never Die Young is an absolute pleasure to witness. Musical Mastery of some of America’s finest songs.',
  },
  {
    name: 'Greg Howard, CEO, Carecraft',
    text: 'The show was flawless. Each song sounds true to the original; faithfully reproduced from beginning to end. Amazing, I would hire them again without hesitation, and plan to do so.',
  },
  {
    name: 'Raffi Simonian',
    text: 'You have got to see Never Die Young (the San Diego based James Taylor tribute band). Their performance at the Belly Up in May 2019 was stunningly good. This simply amazing band covers the folk-rock songs from Taylor’s impactful 50 year career that are both gentle & sweet as well as uplifting. If you want to see a great show that will trigger your most beautiful and emotional nostalgic memories, do not miss Never Die Young!',
  },
];

const Testimonials = () => (
  <div className="page-content">
    <Head>
      <title>NDY - Testimonials</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="page-title">Testimonials</div>
    <div className="content">
      <div className={`tile ${styles.tile}`}>
        <Carousel>
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className={styles.container}>
              <div className={styles.testing}><AccountCircleIcon className={styles.person} />
              </div>
              <div className={`${styles.textemp} ${styles.text} `}>
                {testimonial.text}
                <p className={`${styles.textminor} ${styles.text} `}>
                  - {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  </div>
);
export default Testimonials;
