// import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import { Tab } from "../components/Tab";

export default function Home() {
  return (
    <div className={styles.container}>
      <Tab title="Ken's links" />
      {/* <Tab title="Ken's links" name="link" content="Link collection"/> */}

      {/* metatag に props を持たせると、ブラウザ側で怒られる。 */}
      {/* meta tag の意味を再確認して、エラーの詳細を調べる */}
      {/* <Tab title="Ken's links" name="Link" content="Link collection"/> */}
      <Mai
      {/* <Footer /> */}
    </div>
  );
}
