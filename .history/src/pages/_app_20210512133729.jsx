
import Image from "next/image";
// import classes from "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Image
        className={style.darkmodeicon}
        src="/darkmodeicon.svg"
        width={50}
        height={50}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
