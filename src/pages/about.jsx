import Link from "next/link";
import classes from "../styles/Home.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { LocalHead } from "src/components/LocalHead/LocalHead";
import { Headline } from "src/components/Headline/Headline";

const About = () => {
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
          <h2 className={classes.title}>Self introduction</h2>
          <ul className={classes.discription}>
            Top 10 most important values 🌟
            <li>⭐️健康：健やかで体調よく生きる。</li>
            <li>⭐️成長：変化と成長を維持する。</li>
            <li>⭐️創造：新しくて斬新なアイデアを生む。</li>
            <li>⭐️冒険：新しくてワクワクする体験をする。</li>
            <li>⭐️挑戦：難しい仕事や問題に取り組む。</li>
            <li>⭐️知識：価値ある知識を学び、生み出す。</li>
            <li>⭐️有益：他人の役に立つこと。</li>
            <li>⭐️危険：リスクを取りチャンスを手に入れる。</li>
            <li>⭐️調和：周囲の環境と調和しながら生きる。</li>
            <li>⭐️受諾：ありのままの自分を受け入れる。</li>
          </ul>
        </div>
      </div>

      <div className={classes.aTagGrid}>
        <div className={classes.border}>
          <h2 className={classes.title}>The app I made</h2>
          <ul className={classes.discription}>
            <li>
              <a href="https://counter-app-theta.vercel.app/">Todo-app ✍️</a>
            </li>
            <li>
              <a href="https://my-auth-rho.vercel.app/">My-Auth 🔑</a>
            </li>
            <li>
              <a href="https://count-app.vercel.app/">Count-App 🔢</a>
            </li>
          </ul>
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
            <ul>
              game player🕹:
              <a href="https://www.youtube.com/channel/UCFkncXKwLRtA2MFdXOv34yQ">
                Nephrite,
              </a>
              <a href="https://www.youtube.com/channel/UCdpEN6wGKNoz4k7jVv2lu5w">
                YASU,
              </a>
              <a href="https://www.youtube.com/channel/UC5pQNAOnkkly0doFFDsBPxw">
                Daigo.
              </a>
            </ul>
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
};
export default About;
