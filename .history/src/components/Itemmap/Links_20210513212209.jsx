import Link from "next/link";
import classes from "./Links.module.css";
import "tailwindcss/tailwind.css";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { GiCat } from "react-icons/gi";
import { ZennSvg } from "src/components/Links/Svgicons/ZennSvg";
import { NoteSvg } from "src/components/Links/Svgicons/NoteSvg";

const ITEMS = [
  {
    href: "https://twitter.com/ken_tsx",
    title: "Twitter",
    image: <FaTwitter className={classes.image} />,
  },
  {
    href: "https://zenn.dev/ken505",
    title: "Zenn",
    image: <ZennSvg />,
  },
  {
    href: "https://www.instagram.com/ken.tsx/",
    title: "Instagram",
    image: <FaInstagram className={classes.image} />,
    description: "Account for  Cat photos",
  },
  {
    href: "https://www.instagram.com/ken.pic505/",
    title: "Instagram",
    image: <FaInstagram className={classes.image} />,
    description: "Account for Cat illustration",
  },
  {
    href: "https://note.com/ken505",
    title: "note",
    image: <NoteSvg />,
  },
  {
    href: "https://github.com/ken505",
    title: "Github",
    image: <FaGithub className={classes.image} />,
  },
  {
    href: "/photos",
    title: "Photos",
    image: <GiCat className={classes.image} />,
  },
  {
    href: "https://my-links-phi.vercel.app/posts/aboutMe",
    title: "About Ken",
    image: <IoPersonCircle className={classes.image} />,
  },
];
// リンクタグの中にはチルドレンは一つ、っていうルールなのね。。
export function Links() {
  return (
    <div>
    <Ite
    </div>
  );
}
// css も map で回ってるけどこれはいいのか？？

// 試行錯誤の記録😂
// const hideImage = (item.src || false)
// みたいな定義を最初つけたけど、不要だった。エラーは出なかったけど。
// 最初は Image を使って、 public の svg を呼びに行き、 src を map で回したけど、
// スタイルが svg データ内の fill に直接色を指定することしかできず、
// hover によるスタイルを反映できなかったため却下 😂
// <Image
// className={classes.image}
// src={item.src}
// alt={item.alt}
// width={item.width}
// height={item.height}
// // fill="white"
// />
