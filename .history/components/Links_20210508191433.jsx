// import Image from "next/Image";
import classes from "./Links.module.css";
import Link from "next/link";
export function Links() {
  return (
    <div className={classes.grid}>
      <Link href="https://twitter.com/ken_tsx">
        {/* <Image
          className={classes.image}
          src="/twitter.svg"
          alt="twitter Logo"
          width={21}
          height={21}
        /> */}
        <h2 className={classes.card}> Twitter</h2>
      </Link>
      <Link href="https://www.instagram.com/ken.tsx/">
        {/* <Image
          className={classes.image}
          src="/insta.svg"
          alt="instaglam Logo"
          width={22}
          height={22}
        /> */}
        <h2 className={classes.card}> Instagram</h2>
      </Link>
      <Link href="/about">
        {/* <Image
          className={classes.image}
          src="/insta.svg"
          alt="instaglam Logo"
          width={22}
          height={22}
        /> */}
        <h2 className={classes.card}>About Ken</h2>
      </Link>
      <Link href="/photo">
        {/* <Image
          className={classes.image}
          src="/insta.svg"
          alt="instaglam Logo"
          width={22}
          height={22}
        /> */}
        <a className={classes.card}>Photo</a>
      </Link>
    </div>
  );
}

// Image の補足
// Image を使って public の svg を呼びに行ってるよ。
// 色はとりあえず svg の fill に指定してる。
// Image を使うとデプロイできないので一旦保留。なんで？
