// import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import { Tab } from "../components/Tab";

export function Main() {
  return (
      <main className={styles.main}>
        <Headline title="Welcome to Ken's link 😸" />
        <Links />
      </main>
  );
}
