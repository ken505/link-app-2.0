import Link from "next/link";
import classes from "./Links.module.css";
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
    image: <NoteSvg className={classes.image} />,
  },
  {
    href: "https://github.com/ken505",
    title: "Github",
    image: <FaGithub className={classes.image} />,
  },
  {
    href: "/photos",
    title: "High-reso photos",
    image: <GiCat className={classes.image} />,
    description: "⚠️ Wi-Fi 環境下での閲覧をお勧めします ⚠️",
  },
  {
    href: "/about",
    title: "About Me",
    image: <IoPersonCircle className={classes.image} />,
  },
];
// リンクタグの中にはチルドレンは一つ、っていうルールなのね。。
export const Links = (item) => {
  return (
    <div className={classes.aTagGrid}>
      {ITEMS.map((item) => {
        return (
          <Link href={item.href} key={item.href}>
            <a className={classes.aTag}>
              <div>
                {/* Image データの有無による出し分け処理 */}
                {/* item.src が truthy だったら Image を表示、 falsy だったら null (非表示)*/}
                {/* Image タグに値がないとエラーになるため。 */}
                <div className={classes.linkGrid}>
                  {item.image ? (
                    <div className={classes.linkContent}>{item.image}</div>
                  ) : null}
                  {item.title ? (
                    <h2 className={classes.linkContent}>{item.title}</h2>
                  ) : null}
                </div>
                {item.description ? (
                  <p className={classes.linkInnerDescription}>
                    {item.description}
                  </p>
                ) : null}
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};
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
