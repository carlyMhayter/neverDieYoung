import Head from 'next/head';
import styles from '../styles/page-styles/upcoming.module.scss';

const upcomingDates = [
  {
    showTitle: 'Walking Man Tribute: A Salute to James Taylor',
    showDate: 'July 9th',
    showTime: 'TBA',
    location: 'Connor Prairie / Fischers, Indiana',
    ticketLink: 'special',
  },
  {
    showTitle: 'Walking Man Tribute: A Salute to James Taylor',
    showDate: 'September 7 2022',
    showTime: 'TBA',
    location: 'Welk Resort Theatre Escondido, CA',
    ticketLink: 'TBA',
  },
  {
    showTitle: 'Walking Man Tribute: A Salute to James Taylor',
    showDate: 'September 14 2022',
    showTime: 'TBA',
    location: 'Welk Resort Theatre Escondido, CA',
    ticketLink: 'TBA',
  },
  {
    showTitle: 'Walking Man Tribute: A Salute to James Taylor',
    showDate: 'September 21 2022',
    showTime: 'TBA',
    location: 'Welk Resort Theatre Escondido, CA',
    ticketLink: 'TBA',
  },
  {
    showTitle: 'Walking Man Tribute: A Salute to James Taylor',
    showDate: 'September 28 2022',
    showTime: 'TBA',
    location: 'Welk Resort Theatre Escondido, CA',
    ticketLink: 'TBA',
  },
  {
    showTitle: 'Walking Man Tribute: A Salute to James Taylor',
    showDate: 'October 5 2022',
    showTime: 'TBA',
    location: 'Welk Resort Theatre Escondido, CA',
    ticketLink: 'TBA',
  },
  {
    showTitle: 'Walking Man Tribute: A Salute to James Taylor',
    showDate: 'October 12 2022',
    showTime: 'TBA',
    location: 'Welk Resort Theatre Escondido, CA',
    ticketLink: 'TBA',
  },
  {
    showTitle: 'Walking Man Tribute: A Salute to James Taylor',
    showDate: 'October 19 2022',
    showTime: 'TBA',
    location: 'Welk Resort Theatre Escondido, CA',
    ticketLink: 'TBA',
  },
  {
    showTitle: 'Walking Man Tribute: A Salute to James Taylor',
    showDate: 'October 26 2022',
    showTime: 'TBA',
    location: 'Welk Resort Theatre Escondido, CA',
    ticketLink: 'TBA',
  },
];

const UpcomingShows = () => (
  <div className="page-content">
    <Head>
      <title>NDY - Upcoming Shows</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="page-title"> Upcoming Shows </div>
    <div className="content">
      <div className={styles.container}>
        {upcomingDates.map((upcomingDate) => (
          <div className={styles.item} key={upcomingDate}>
            {/* <div className="showtitle upcoming-item-info">
              {upcomingDate.showTitle}
            </div> */}
            <div className={`${styles.title} ${styles.info}`}>
              {upcomingDate.showDate}
            </div>
            <div className={styles.info}> {upcomingDate.location} </div>
            {upcomingDate.ticketLink === 'TBA' && (
              <div className={styles.tba}> Tickets Available Soon </div>
            )}
            {upcomingDate.ticketLink === 'special' && (
              <>
                <div className={styles.special}>
                  Pre-Sale Tickets <p>(April 6th 10:00 EST - April 11th)</p>
                </div>
                <a
                  href="https://tickets.indianapolissymphony.org/events?view=list&kid=50&promo=NDY0239856"
                  target="_blank"
                  className={styles.button}
                >
                  Get Tickets
                </a>
                <div className={styles.special}>
                  On-Sale Tickets <p>(Starting April 12th, 10:00 EST)</p>
                </div>
                <a
                  href="https://tickets.indianapolissymphony.org/events?view=list&kid=50&promo=NDY0239856"
                  target="_blank"
                  className={styles.button}
                >
                  Get Tickets
                </a>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default UpcomingShows;
