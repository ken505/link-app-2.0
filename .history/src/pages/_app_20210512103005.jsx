import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        );
        <link rel="icon" href="/favicon.ico" />
        <Component {...pageProps} />
      </Head>
    </div>
  );
}

export default MyApp;
