import 'styles/style.scss';
import 'styles/mobileStyling.scss';

import NavBar from '../components/Navbar';
import { PropTypes } from 'prop-types';

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
