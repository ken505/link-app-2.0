// import Image from "next/Image";
import classes from "./Links.module.css";
import Link from "next/link";
export function Links() {
  return (
    <div className={classes.grid}>
    <Link>
      <a href="https://twitter.com/ken_tsx" className={classes.card}>
        {/* <Image
          className={classes.image}
          src="/twitter.svg"
          alt="twitter Logo"
          width={21}
          height={21}
        /> */}
        <h2>Twitter</h2>
      </a>
      <a href="https://www.instagram.com/ken.tsx/" className={classes.card}>
        {/* <Image
          className={classes.image}
          src="/insta.svg"
          alt="instaglam Logo"
          width={22}
          height={22}
        /> */}
        <h2>Instagram</h2>
      </a>
      <a href="/about" className={classes.card}>
        {/* <Image
          className={classes.image}
          src="/insta.svg"
          alt="instaglam Logo"
          width={22}
          height={22}
        /> */}
        <h2>About Ken</h2>
      </a>
      <a href="/photo" className={classes.card}>
        {/* <Image
          className={classes.image}
          src="/insta.svg"
          alt="instaglam Logo"
          width={22}
          height={22}
        /> */}
        <h2>Photo</h2>
      </a>
    </div>
  );
}

// Image の補足
// Image を使って public の svg を呼びに行ってるよ。
// 色はとりあえず svg の fill に指定してる。
// Image を使うとデプロイできないので一旦保留。なんで？
