import Link from "next/link";
import classes from "../styles/Home.module.css";
import { Footer } from "src/components/Footer/Footer";
import { Tab } from "src/components/Tab/Tab";
import { Headline } from "src/components/Headline/Headline";

export default function Home() {
  return (
    <div className={classes.container}>
      <Tab title="About Ken" />
      <Headline title="About Ken 😺" className={classes.title}/>
      <Link href="/">
        <h2 className={classes.card}>Back</h2>
      </Link>
      <Footer />
    </div>
  );
}
