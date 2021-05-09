import Link from "next/link";
import Image from "next/image";
// "next/Image"とすると、dev では問題ないが、build で error になるよ。
import classes from "../styles/Home.module.css";
import { Tab } from "../components/Tab";
import { Headline } from "../components/Headline";
// import Head from "next/head";
// import { Footer } from "../components/Footer";
// import { Main } from "../components/Main";
// import { Headline } from "../components/Headline";
// import { Links } from "../components/Links";

export default function Home() {
  return (
    <div className={classes.container}>
      <Tab title="About Ken" />
      <Headline title="Photos 😽" />
      <Link href="/">
        <h2 className={classes.card}>Back to links</h2>
      </Link>
      <Image
        src="/images/photo2.jpg"
        alt="Store Manager Rask's Photo"
        width={300}
        height={300}
        // priority
        // className="next-image"
      />
      <P>Store Manager Rask</P>
      {/* <Image
        src="/images/photo.jpg"
        alt="Assistant Store Manager Sakura's Photo"
        width={500}
        height={500}
        priority
        className="next-image"
      /> */}
    </div>
  );
}
