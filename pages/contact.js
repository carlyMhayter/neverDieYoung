import FormContact from '../components/FormContact';
import Head from 'next/head';

const Contact = () => (
  <div className="page-content">
    <Head>
      <title>NDY - Contact</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="page-title">Contact</div>
    <div className="content">
      <div className="tile">
        <FormContact />
      </div>
    </div>
  </div>
);
export default Contact;
