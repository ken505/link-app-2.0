import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Headline } from "../components/Headline";
import { Links } from "../components/Links";

export default function index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ken's link</title>
        <meta name="link" content="link" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Headline title="Welcome to Ken's link 😸"/>
        <Links />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
