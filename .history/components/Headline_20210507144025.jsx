import Head from "next/head";
import styles from "../styles/Home.module.css";
// import { Footer } from "../components/Footer";
import { Links } from "../components/Links";

export default function Home() {
  return (
      <h1 className={styles.title}>Welcome to Ken's link ! 😸</h1>
      <Links />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
