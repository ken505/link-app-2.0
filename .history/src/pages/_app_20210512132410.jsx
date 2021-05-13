
import Image from "next/image";
import f "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Image
        className={styles.darkmodeicon}
        src="/darkmodeicon.svg"
        width={20}
        height={20}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
