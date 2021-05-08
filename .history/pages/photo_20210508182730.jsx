import classes from "../styles/Home.module.css";
import { Tab } from "../components/Tab";
import { Headline } from "../components/Headline";
// import { Footer } from "../components/Footer";
// import { Main } from "../components/Main";
// import Head from "next/head";
// import { Headline } from "../components/Headline";
// import { Links } from "../components/Links";

export default function Home() {
  return (
    <div className={classes.container}>
      <Tab title="About Ken" />
      <Headline title="Photo 😺" />
      <a href="/" className={classes.card}>
        {/* <Image
          className={classes.image}
          src="/insta.svg"
          alt="instaglam Logo"
          width={22}
          height={22}
        /> */}
        <h2>Back</h2>
      </a>
    </div>
  );
}
