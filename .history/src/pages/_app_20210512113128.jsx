
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Imag
        // className={classes.image}
        src="darkmodeicon.svg"
        width={20}
        height={20}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;