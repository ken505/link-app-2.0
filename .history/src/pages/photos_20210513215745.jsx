import Image from "next/image";
import Link from "next/link";
import classes from "../styles/Home.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { Tab } from "src/components/Tab/Tab";
import { Headline } from "src/components/Headline/Headline";

const ITEMS =[
  {
  src: "/images/photo2.jpg" ,
  alt: "Store Manager Rask's Photo",

  },
  {
  src: ,
  alt; ,
  },
  ]

export default function Home() {
  return (
    <div className={classes.container}>
      <Tab title="About Ken" />
      <Headline title="Photos" className={classes.title} />
      <Link href="/">
        <h2 className={classes.backtolinks}>
          <IoIosArrowBack className={classes.IoIosArrowBack}/>
          Back to links
        </h2>
      </Link>

      {/* 写真は width300 * height169 */}
      {/* 配置は grid 折り返し的な */}
      {/* スマホサイズで一列固定でいこうかな */}
      


      <Image
        className={classes.image}
        src=
        alt=
        width={300}
        height={300}
      />
      <p>Store Manager Rask</p>
      <Image
        src="/images/photo.jpg"
        alt="Assistant Store Manager Sakura's Photo"
        width={300}
        height={300}
      />
      <p>Assistant Store Manager Sakura</p>
    </div>
  );
}
