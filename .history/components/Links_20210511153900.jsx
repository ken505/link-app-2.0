import Image from "next/image";
import classes from "./Links.module.css";
import Link from "next/link";
// import { Twittersvg } from "./Twittersvg";

const ITEMS = [
  {
    href: "https://twitter.com/ken_tsx",
    title: "Twitter",
    src: "/twitter.svg",
    width: 19,
    height: 19,
  },
  {
    href: "https://www.instagram.com/ken.tsx/",
    title: "Instagram",
    src: "/insta.svg",
    width: 19,
    height: 19,
    // description: "Account for cat photos",
  },
  {
    href: "https://zenn.dev/ken505",
    title: "Zenn",
    src: "/zenn.svg",
    width: 19,
    height: 19,
  },
  {
    href: "https://note.com/ken505",
    title: "note",
    src: "/note.svg",
    width: 19,
    height: 19,
  },
  {
    href: "https://github.com/ken505",
    title: "Github",
    src: "/github.svg",
    width: 19,
    height: 19,
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
    <div className={classes.grid}>
      {ITEMS.map((item) => {
        return (
          <Link href={item.href} key={item.href}>
            <a className={classes.card}>

              {/* Image データの有無による出し分け処理 */}
              {/* item.src が truthy だったら Image を表示、 falsy だったら null (非表示)*/}
              {/* Image タグに値がないとエラーになるため。 */}
              {/* const hideImage = (item.src || false) */}
              {/* みたいな定義を最初つけたけど、不要だった。エラーは出なかったけど。 */}
              {item.src ? (
                <Image
                  className={classes.image}
                  src={item.src}
                  // alt="twitter Logo"
                  width={item.width}
                  height={item.height}
                />
              ) : null}
              <h2>{item.title}</h2>

              {/* 👇説明が必要ならどうぞ */}
              <p>{item.description}</p>
              
            </a>
          </Link>
        );
      })}
    </div>
  );
}
// css も map で回ってるけどこれはいいのか？？

// Image の補足
// Image を使って public の svg を呼びに行ってるよ。
// 色はとりあえず svg の fill に指定してる。
// Image を使うとデプロイできないので一旦保留。なんで？

{
  /* <Image
className={classes.image}
src="/insta.svg"
alt="instaglam Logo"
width={22}
height={22}
/> */
}
