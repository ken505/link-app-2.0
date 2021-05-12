import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Head>
      <Component {...pageProps} />
      );
      
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default MyApp;
