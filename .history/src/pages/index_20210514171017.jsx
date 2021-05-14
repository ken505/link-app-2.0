import classes from "../styles/Home.module.css";
import { Tab } from "src/components/Tab/Tab";
import { Main } from "src/components/Main/Main";
import Image from "next/image";

export default function Home() {
  return (
    <div className={classes.container}>
      <Tab title="Ken's links" />
      <Main />
        <Image
          className={classes.catImage}
          src="/images/Meron.jpg"
          alt=" Meron's photo"
          width={256}
          height={144}
        />
    </div>
  );
}

// <Tab title="Ken's links" name="link" content="Link collection"/>
// metatag に props を持たせると、ブラウザ側で怒られる。
// meta tag の意味を再確認して、エラーの詳細を調べる。
