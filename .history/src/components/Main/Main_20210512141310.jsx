import classes from "./Main.module.css";
import { Headline } from "src/components/Headline/Headline";
import { Links } from "src/components/Links/Links";
import Image from "next/image";

export function Main() {
  return (
    <main className={classes.main}>
      <Image
        // className={styles.icon}
        src="/darkmodeicon.svg"
        width={20}
        height={20}
      />
      <Headline title="Welcome to Ken's links !" />
      <Links />
    </main>
  );
}
