import Image from "next/image";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div >
      
      <Component {...pageProps} />
  );
}

export default MyApp;
