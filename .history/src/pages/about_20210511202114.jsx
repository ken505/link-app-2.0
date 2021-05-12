import Link from "next/link";
import classes from "../styles/Home.module.css";
import { Footer } from "../components/Footer/Footer";
import { Tab } from "../components/Tab";
import { Headline } from "../components/Headline/Headline";
// import { Main } from "../components/Main";
// import Head from "next/head";
// import { Headline } from "../components/Headline";
// import { Links } from "../components/Links";

export default function Home() {
  return (
    <div className={classes.container}>
      <Tab title="About Ken" />
      <Headline title="About Ken 😺" />
      <Link href="/" >
        <h2 className={classes.card}>Back</h2>
      </Link>
      <Footer />
    </div>
  );
}
