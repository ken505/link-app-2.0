import Image from "next/image";
import classes from "./Main.module.css";
import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
// import Head from "next/head";
// import { Tab } from "../components/Tab";

export function Main() {
  return (
    <main className={classes.main}>
      <Headline title="Welcome to Ken's links"/>
      <Image className={classes.icon} src="/images/ken.jpg" width={50} height={50} />
      <Links />
    </main>
  );
}
