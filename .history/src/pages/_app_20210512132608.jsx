
import Image from "next/image";
import classes from "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className={classes.darkmodeicon}>
    
      <Image
        src="/darkmodeicon.svg"
        width={20}
        height={20}
      />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
