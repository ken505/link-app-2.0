import classes from "../styles/Home.module.css";
import { Tab } from "src/components/Tab/Tab";
import { Headline } from "src/components/Headline/Headline";
import { Links } from "src/components/Links/Links";

export default function Home() {
  return (
    <div className={classes.container}>
      <Tab title="Ken's links" />
      <Headline title="Welcome to Ken's links !" />
      <img className={classes.icon} src="/images/ken.jpg" />
      <Links />
    </div>
  );
}

// <Tab title="Ken's links" name="link" content="Link collection"/>
// metatag に props を持たせると、ブラウザ側で怒られる。
// meta tag の意味を再確認して、エラーの詳細を調べる。
