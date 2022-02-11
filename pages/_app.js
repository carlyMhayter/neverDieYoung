import '../style.css';
import '../navBarStyling.css';
import '../mobileStyling.css';

import NavBar from '../components/Navbar';
import { PropTypes } from 'prop-types';

// import App from 'next/app'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
