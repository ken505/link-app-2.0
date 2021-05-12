import classes from "./Main.module.css";
import { Headline } from "../components/Headline/H";
import { Links } from "../components/Links";
// import Head from "next/head";
// import { Tab } from "../components/Tab";

export function Main() {
  return (
    <main className={classes.main}>
      <Headline title="Welcome to Ken's links !" />
      <Links />
    </main>
  );
}
