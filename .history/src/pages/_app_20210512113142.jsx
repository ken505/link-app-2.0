
import "../styles/globals.css";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Image
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
