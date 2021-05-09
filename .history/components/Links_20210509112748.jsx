import Image from "next/Image";
import classes from "./Links.module.css";
import Link from "next/link";
// import { Twittersvg } from "./Twittersvg";

const ITEMS = [
  { href: "https://twitter.com/ken_tsx", title: "Twitter" , src="/twitter.svg"},
  { href: "https://www.instagram.com/ken.tsx/", title: "Instagram",src="" },
  { href: "/about", title: "About Ken" ,},
  { href: "/photo", title: "Photo" ,},
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
          <Link href={item.href}>
            <h2 className={classes.card}>{item.title}</h2>
            <Image src={item.image}/>
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
  src="/twitter.svg"
  alt="twitter Logo"
  width={21}
  height={21}
/>; */
}
{
  /* <Image
className={classes.image}
src="/insta.svg"
alt="instaglam Logo"
width={22}
height={22}
/> */
}