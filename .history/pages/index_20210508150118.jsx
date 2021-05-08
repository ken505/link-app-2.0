import styles from "../styles/Home.module.css";
import { Tab } from "../components/Tab";
import { Main } from "../components/Main";
import Head from "next/head";
// import { Headline } from "../components/Headline";
// import { Links } from "../components/Links";

export default function Home() {
  return (
    <div className={styles.container}>
      <Tab title="Ken's links" />
      {/* <Tab title="Ken's links" name="link" content="Link collection"/> */}

      {/* metatag に props を持たせると、ブラウザ側で怒られる。 */}
      {/* meta tag の意味を再確認して、エラーの詳細を調べる */}
      {/* <Tab title="Ken's links" name="Link" content="Link collection"/> */}
      <Main />
      {/* <Footer /> */}
    </div>
  );
}
