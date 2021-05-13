import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Image
        // className={classes.image}
        src="darkmodeicon.svg"
        alt=
        width={20}
        height=20
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
