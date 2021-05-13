
import Image from "next/image";
import classes from ".c";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Image
        className={classes.darkmodeicon}
        src="/darkmodeicon.svg"
        width={50}
        height={50}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
