import Link from "next/link";
import Image from "next/Image";
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
        {/* <Image
          className={classes.image}
          src="/insta.svg"
          alt="instaglam Logo"
          width={22}
          height={22}
        /> */}
        <h2 className={classes.card}>Back</h2>
      </Link>
       {/* Store Manager "Rask" */}
      <Image
        src="/images/photo2.jpg"
        alt="副店長"
        width={1000}
        height={1000}
        // priority
        // className="next-image"
      />
      ## Assistant Store Manager "Sakura"
      <Image
        src="/images/photo.jpg"
        alt="Photo"
        width={1000}
        height={1000}
        priority
        className="next-image"
      />
    </div>
  );
}
