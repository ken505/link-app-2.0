import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Footer } from "../src/components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ken's link 🐱</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Ken's link ! 😸</h1>

        {/* <p className={styles.description}>
          Hi, I'm a Developer, designer, photographer, and musician 🧑🏻‍💻
        </p> */}

        <div className={styles.grid}>
          
        </div>

        {/* </div> */}
      </main>
      <Footer />
    </div>
  );
}
