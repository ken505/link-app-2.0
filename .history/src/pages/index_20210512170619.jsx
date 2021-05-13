import classes from "../styles/Home.module.css";
import { Tab } from "src/components/Tab/Tab";
import { Main } from "src/components/Main/Main";
import Link from "next/link";

export default function Home() {
  return (
    <div className={classes.container}>
      <Tab title="Ken's links" />
      <a
        href="http://twitter.com/share?url=[https://my-links-phi.vercel.app/]&text=[おためし]&via=[ken]&related=[https://twitter.com/ken_tsx]&hashtags=[#try]"
        class="twitter-share-button"
        data-show-count="false"
      >
        Tweet
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>

      {/* <Tab title="Ken's links" name="link" content="Link collection"/> */}
      {/* metatag に props を持たせると、ブラウザ側で怒られる。 */}
      {/* meta tag の意味を再確認して、エラーの詳細を調べる */}
      <Main />
    </div>
  );
}
