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
            front-end engineer.đ§đťâđť
          </p>
        </div>
      </div>

      <div className={classes.aTagGrid}>
        <div className={classes.border}>
          <h2 className={classes.title}>Self introduction</h2>
          <ul className={classes.discription}>
            Top 10 most important values đ
            <li>â­ď¸ĺĽĺşˇďźĺĽăăă§ä˝čŞżăăçăăă</li>
            <li>â­ď¸ćéˇďźĺ¤ĺă¨ćéˇăçś­ćăăă</li>
            <li>â­ď¸ĺľé ďźć°ăăăŚćŹć°ăŞă˘ă¤ăă˘ăçăă</li>
            <li>â­ď¸ĺéşďźć°ăăăŚăŻăŻăŻăŻăăä˝é¨ăăăă</li>
            <li>â­ď¸ććŚďźéŁăăäťäşăĺéĄăŤĺăçľăă</li>
            <li>â­ď¸çĽč­ďźäžĄĺ¤ăăçĽč­ăĺ­Śăłăçăżĺşăă</li>
            <li>â­ď¸ćçďźäťäşşăŽĺ˝šăŤçŤă¤ăă¨ă</li>
            <li>â­ď¸ĺąéşďźăŞăšăŻăĺăăăŁăłăšăćăŤĺĽăăă</li>
            <li>â­ď¸čŞżĺďźĺ¨ĺ˛ăŽç°ĺ˘ă¨čŞżĺăăŞăăçăăă</li>
            <li>â­ď¸ĺčŤžďźăăăŽăžăžăŽčŞĺăĺăĺĽăăă</li>
          </ul>
        </div>
      </div>

      <div className={classes.aTagGrid}>
        <div className={classes.border}>
          <h2 className={classes.title}>The app I made</h2>
          <ul className={classes.discription}>
            <li>
              <a href="https://counter-app-theta.vercel.app/">Todo-app âď¸</a>
            </li>
            <li>
              <a href="https://my-auth-rho.vercel.app/">My-Auth đ</a>
            </li>
            <li>
              <a href="https://count-app.vercel.app/">Count-App đ˘</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={classes.aTagGrid}>
        <div className={classes.border}>
          <h2 className={classes.title}>Hobbies</h2>
          <ul className={classes.discription}>
            <li>Photography đ¸</li>
            <li>Illustration âđť</li>
            <li>Playing guitar đ¸</li>
            <li>Drumming đĽ</li>
            <li>Video Editing đĽ</li>
          </ul>
        </div>
      </div>

      <div className={classes.aTagGrid}>
        <div className={classes.border}>
          <h2 className={classes.title}>Living habits</h2>
          <ul className={classes.discription}>
            <li>High-Intensity Interval Training đđťââď¸</li>
            <li>Reading books đ</li>
          </ul>
        </div>
      </div>

      <div className={classes.aTagGrid}>
        <div className={classes.border}>
          <h2 className={classes.title}>Likes</h2>
          <ul className={classes.discription}>
            <li>Cat đ</li>
            <li>Formula 1 & Lewis Hamilton đ</li>
            <li>billie eilish</li>
            <li>Mac đť</li>
            <ul>
              game playerđš:
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
