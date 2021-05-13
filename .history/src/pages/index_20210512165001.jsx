import classes from "../styles/Home.module.css";
import { Tab } from "src/components/Tab/Tab";
import { Main } from "src/components/Main/Main";

export default function Home() {
  return (
    <div className={classes.container}>
      <Tab title="Ken's links" />
      <div>http://twitter.com/share?url=[シェアするページのurl]&text=[ツイート内テキスト]&via=[ツイート内に含むユーザ名]&related=[ツイート後に表示されるユーザー]&hashtags=[ハッシュタグ]</div>
      {/* <Tab title="Ken's links" name="link" content="Link collection"/> */}
      {/* metatag に props を持たせると、ブラウザ側で怒られる。 */}
      {/* meta tag の意味を再確認して、エラーの詳細を調べる */}
      <Main />
    </div>
  );
}