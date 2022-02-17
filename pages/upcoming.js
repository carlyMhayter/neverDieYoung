import Head from 'next/head';

const upcomingDates = [
  {
    showTitle: 'Walking Man Tribute: A Salute to James Taylor',
    showDate: 'April 23 2022',
    showTime: 'Time is TBA',
    location: 'Arizona Charlies/Decatur, Las Vegas',
    ticketLink: 'Ticket link coming soon',
  },
  {
    showTitle: 'Walking Man Tribute: A Salute to James Taylor',
    showDate: 'Date TBA',
    showTime: 'TBA',
    location: 'Connor Prairie / Fischers, Indiana',
    ticketLink: 'Ticket link coming soon',
  },
  {
    showTitle: 'Walking Man Tribute: A Salute to James Taylor',
    showDate: 'September 7 2022',
    showTime: 'TBA',
    location: 'Welk Resort Theatre Escondido, CA',
    ticketLink: 'Ticket link coming soon',
  },
  {
    showTitle: 'Walking Man Tribute: A Salute to James Taylor',
    showDate: 'September 14 2022',
    showTime: 'TBA',
    location: 'Welk Resort Theatre Escondido, CA',
    ticketLink: 'Ticket link coming soon',
  },
  {
    showTitle: 'Walking Man Tribute: A Salute to James Taylor',
    showDate: 'September 21 2022',
    showTime: 'TBA',
    location: 'Welk Resort Theatre Escondido, CA',
    ticketLink: 'Ticket link coming soon',
  },
  {
    showTitle: 'Walking Man Tribute: A Salute to James Taylor',
    showDate: 'September 28 2022',
    showTime: 'TBA',
    location: 'Welk Resort Theatre Escondido, CA',
    ticketLink: 'Ticket link coming soon',
  },
  {
    showTitle: 'Walking Man Tribute: A Salute to James Taylor',
    showDate: 'October 5 2022',
    showTime: 'TBA',
    location: 'Welk Resort Theatre Escondido, CA',
    ticketLink: 'Ticket link coming soon',
  },
  {
    showTitle: 'Walking Man Tribute: A Salute to James Taylor',
    showDate: 'October 12 2022',
    showTime: 'TBA',
    location: 'Welk Resort Theatre Escondido, CA',
    ticketLink: 'Ticket link coming soon',
  },
  {
    showTitle: 'Walking Man Tribute: A Salute to James Taylor',
    showDate: 'October 19 2022',
    showTime: 'TBA',
    location: 'Welk Resort Theatre Escondido, CA',
    ticketLink: 'Ticket link coming soon',
  },
  {
    showTitle: 'Walking Man Tribute: A Salute to James Taylor',
    showDate: 'October 26 2022',
    showTime: 'TBA',
    location: 'Welk Resort Theatre Escondido, CA',
    ticketLink: 'Ticket link coming soon',
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
      <div className="upcoming-container">
        {upcomingDates.map((upcomingDate) => (
          <div className="upcoming-item" key={upcomingDate}>
            {/* <div className="showtitle upcoming-item-info">
              {upcomingDate.showTitle}
            </div> */}
            <div className="upcoming-item-info showtitle">
              {upcomingDate.showDate}
            </div>
            <div className="upcoming-item-info">
              {' '}
              {upcomingDate.ticketLink}{' '}
            </div>
            <div className="upcoming-item-info"> {upcomingDate.location} </div>
            {/* <a
              href={upcomingDate.ticketLink}
              target="_blank"
              className="ticket-button"
            >
              Tickets
            </a> */}
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default UpcomingShows;
