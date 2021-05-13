
import Image from "next/image";
import "";

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
