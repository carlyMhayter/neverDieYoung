import "../style.css";
import "../navBarStyling.css";
import "../mobileStyling.css";
import NavBar from "../components/Navbar";

// import App from 'next/app'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
