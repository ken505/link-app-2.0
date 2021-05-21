import Link from "next/link";
import classes from "../styles/Home.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { LocalHead } from "src/components/LocalHead/LocalHead";
import { Headline } from "src/components/Headline/Headline";

export default function Home() {
  return (
    <div className={classes.container}>
      <LocalHead title="About Me" />
      <Headline title="About Me" />
      <Link href="/">
        <h2 className={classes.backtolinks}>
          <IoIosArrowBack className={classes.IoIosArrowBack} />
          Back to links
        </h2>
      </Link>
      <img className={classes.icon} src="/images/ken.jpg" />

      <div className={classes.aTagGrid}>
        <div className={classes.border}>
          <h2 className={classes.title}>Self introduction</h2>
          <p className={classes.discription}>
            I'm learning React, Next.js, Typescript and Tailwindcss to become an
            front-end engineer.🧑🏻‍💻
          </p>
        </div>
      </div>

      <div className={classes.aTagGrid}>
        <div className={classes.border}>
          <h2 className={classes.title}>Hobbies</h2>
          <ul className={classes.discription}>
            <li>Photography 📸</li>
            <li>Illustration ✍🏻</li>
            <li>Playing guitar 🎸</li>
            <li>Drumming 🥁</li>
            <li>Video Editing 🎥</li>
          </ul>
        </div>
      </div>

      <div className={classes.aTagGrid}>
        <div className={classes.border}>
          <h2 className={classes.title}>Living habits</h2>
          <ul className={classes.discription}>
            <li>High-Intensity Interval Training 🏃🏻‍♂️</li>
            <li>Reading books 📖</li>
          </ul>
        </div>
      </div>

      <div className={classes.aTagGrid}>
        <div className={classes.border}>
          <h2 className={classes.title}>Likes</h2>
          <ul className={classes.discription}>
            <li>Cat 🐈</li>
            <li>Formula 1 & Lewis Hamilton 🏎</li>
            <li>billie eilish</li>
            <li>Mac 💻</li>
          </ul>
        </div>
      </div>

      <div className={classes.aTagGrid}>
        <div className={classes.border}>
          <h2 className={classes.title}>Personal infomation</h2>
          <ul className={classes.discription}>
            <li>Address: Hyogo</li>
            <li>Gender: Male</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
