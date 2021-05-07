import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { Headline } from "../components/Headline";
import { Headtab } from "../components/Headtab";
// import { Links } from "../components/Links";

export default function about() {
  return (
    <div className={styles.container}>
      <Headtab title="About Ken" />
      <main className={styles.main}>
        <Headline title="About Ken 🐱" />
        {/* <Links /> */}
      </main>
      <Footer />
    </div>
  );
}
