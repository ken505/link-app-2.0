import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div></div>
    <Head>
      <Component {...pageProps} />
      );
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default MyApp;
