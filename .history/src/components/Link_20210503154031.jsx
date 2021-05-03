import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Footer } from "../src/components/Footer";

export default function Home() {
  return (
  

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Ken's link ! 😸</h1>

        {/* <p className={styles.description}>
          Hi, I'm a Developer, designer, photographer, and musician 🧑🏻‍💻
        </p> */}

        <div className={styles.grid}>
          <a
            href="https://twitter.com/ken_tsx"
            //  className={styles.card}
            className={styles.card}
          >
            <Image
              className={styles.image}
              src="/twitter.svg"
              alt="twetter Logo"
              // width={72} height={16}
              width={25}
              height={25}
            />
            <h2>Twitter</h2>
            {/* <p>FI.</p> */}
          </a>

          <a
            href="https://twitter.com/ken_tsx"
            //  className={styles.card}
            className={styles.card}
          >
            <Image
              className={styles.image}
              src="/twitter.svg"
              alt="twetter Logo"
              // width={72} height={16}
              width={25}
              height={25}
            />
            <h2>Twitter</h2>
            {/* <p>FI.</p> */}
          </a>
          <a
            href="https://twitter.com/ken_tsx"
            //  className={styles.card}
            className={styles.card}
          >
            <Image
              className={styles.image}
              src="/twitter.svg"
              alt="twetter Logo"
              // width={72} height={16}
              width={25}
              height={25}
            />
            <h2>Twitter</h2>
            {/* <p>FI.</p> */}
          </a>
        </div>

        {/* <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a> */}

        {/* <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a> */}

        {/* <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            // className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        {/* </div> */}
      </main>
      <Footer />
    </div>
  );
}
