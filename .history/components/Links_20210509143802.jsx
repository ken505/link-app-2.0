// import Image from "next/image";
import classes from "./Links.module.css";
import Link from "next/link";
// import { Twittersvg } from "./Twittersvg";

const ITEMS = [
  { href: "https://twitter.com/ken_tsx", title: "Twitter",discriiption: "Account for cat photos" },
  { href: "https://www.instagram.com/ken.tsx/", title: "Instagram", discriiption: "Account for cat photos"},
  { href: "https://zenn.dev/ken505", title: "Zenn",discriiption: "Account for cat photos" },
  { href: "https://note.com/ken505", title: "note",discriiption: "Account for cat photos" },
  { href: "https://github.com/ken505", title: "Github",discriiption: "Account for cat photos" },
  { href: "https://my-links-phi.vercel.app/posts/aboutMe", title: "About Ken",iscriiption: "Account for cat photos" },
  { href: "/photos", title: "Photos" },
];
// className={classes.image}
// src="/twitter.svg"
// alt="twitter Logo"
// width={21}
// height={21}

export function Links() {
  return (
    <div className={classes.grid}>
      {ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <h2 className={classes.card}>{item.title}</h2>
            <p>{item.description}</p>
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

{/* <Image
  className={classes.image}
  src="/twitter.svg"
  alt="twitter Logo"
  width={21}
  height={21}
/>; */}

{
  /* <Image
className={classes.image}
src="/insta.svg"
alt="instaglam Logo"
width={22}
height={22}
/> */
}
