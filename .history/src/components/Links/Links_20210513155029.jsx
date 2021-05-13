import Link from "next/link";
import classes from "./Links.module.css";
import { TwitterSvg } from "src/components/Links/Svgicons/TwitterSvg";
import "tailwindcss/tailwind.css";
import { FaSmileWink, FaTwitter, FaInstagram } from 'react-icons/fa';

<i class="fab FaInstagram"></i>

const ITEMS = [
  {
    href: "https://twitter.com/ken_tsx",
    title: "Twitter",
    image: <FaTwitter className={classes.image}/>,
  },
  {
    href: "https://www.instagram.com/ken.tsx/",
    title: "Instagram",
    image: <FaTwitter className={classes.image}/>,
    description: "Account for cat photos",
  },
  {
    href: "https://zenn.dev/ken505",
    title: "Zenn",
  },
  {
    href: "https://note.com/ken505",
    title: "note",
  },
  {
    href: "https://github.com/ken505",
    title: "Github",
  },
  {
    href: "https://my-links-phi.vercel.app/posts/aboutMe",
    title: "About Ken",
  },
  {
    href: "/photos",
    title: "Photos",
  },
];

// リンクタグの中にはチルドレンは一つ、っていうルールなのね。。
export function Links() {
  return (
    <div>
      {ITEMS.map((item) => {
        return (
          <Link href={item.href} key={item.href}>
            <a className={classes.aTag}>
              <div>
                {/* Image データの有無による出し分け処理 */}
                {/* item.src が truthy だったら Image を表示、 falsy だったら null (非表示)*/}
                {/* Image タグに値がないとエラーになるため。 */}
                <div className={classes.titleImage}>
                  {item.image ? (
                    <div>{item.image}</div>
                  ) : null}
                  {item.title ? <h2>{item.title}</h2> : null}
                </div>
                {item.description ? <p>{item.description}</p> : null}
              </div>
            </a>
          </Link>
        );
      })}
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
