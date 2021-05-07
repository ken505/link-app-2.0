import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { Headline } from "../components/Headline";
// import { Links } from "../components/Links";

export default function about() {
  return (
    <div className={styles.container}>
      <Hea
      <main className={styles.main}>
      <Headline title="About Ken 🐱"/>
        {/* <Links /> */}
      </main>

      {/* golbalss.css が効いて Footer がセンターにきてるんだけど・・・ */}
      <Footer />
    </div>
  );
}
