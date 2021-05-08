// import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import { Tab } from "../components/Tab";

export default function Home() {
  return (
    <div className={styles.container}>
      <Tab />

      meta
      {/* <Tab title="Ken's links" name="Link" content="Link collection"/> */}
      <main className={styles.main}>
        <Headline title="Welcome to Ken's link 😸" />
        <Links />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
