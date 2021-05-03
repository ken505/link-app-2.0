import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Footer } from "../src/components/Footer";
import { Links } from "../src/components/Links";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ken's link 🐱</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Links />
      </main>
      <Footer />
    </div>
  );
}
