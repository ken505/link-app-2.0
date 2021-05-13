import Image from "next/image";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div >
      <Image
        // className={styles.icon}
        src="/darkmodeicon.svg"
        width={20}
        height={20}
        margin={50}
      />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
