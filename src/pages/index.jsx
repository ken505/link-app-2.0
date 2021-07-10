import classes from "../styles/Home.module.css";
import { LocalHead } from "src/components/LocalHead/LocalHead";
import { Headline } from "src/components/Headline/Headline";
import { Links } from "src/components/Links/Links";
import { SnsShare } from "src/components/SnsShare/SnsShare";

const Home = () => {
  return (
    <div className={classes.container}>
      <LocalHead
        title="Ken's links"
        cardSize="summary"
        ogUrl="https://link-app-pink.vercel.app/"
        ogTitle="Ken's links"
        ogDescription="This is a site that collects my various SNS accounts, self-introduction, and high-resolution images of cats 🐈"
        ogImage="https://user-images.githubusercontent.com/68226398/118977762-7d737280-b9b1-11eb-891d-9c6e1cab1c2f.jpg"
      />
      {/* <h1 className="text-red-500">hello world</h1> */}
      <Headline title="Welcome to Ken's links !" />
      <img className={classes.icon} src="/images/ken.jpg" />
      <Links />
      <div className={classes.SnsShareiconGridIndex}>
        <SnsShare
          url={"https://link-app-pink.vercel.app/"}
          title={"Ken's links 🐈"}
        />
      </div>
    </div>
  );
};
export default Home;

// <Tab title="Ken's links" name="link" content="Link collection"/>
// metatag に props を持たせると、ブラウザ側で怒られる。
// meta tag の意味を再確認して、エラーの詳細を調べる。
