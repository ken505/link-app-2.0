import classes from "./styles/Home.module.css";
import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
// import Head from "next/head";
// import { Tab } from "../components/Tab";

export function Main() {
  return (
    <main className={classes.main}>
      <Headline title="Welcome to Ken's link 😸" />
      <Links />
    </main>
  );
}
