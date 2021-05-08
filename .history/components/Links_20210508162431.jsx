// import Image from "next/Image";
import class from "./Links.module.css";

export function Links() {
  return (
    <div className={class.grid}>
      <a href="https://twitter.com/ken_tsx" className={class.card}>
        {/* <Image
          className={class.image}
          src="/twitter.svg"
          alt="twitter Logo"
          width={21}
          height={21}
        /> */}
        <h2>Twitter</h2>
      </a>
      <a href="https://www.instagram.com/ken.tsx/" className={class.card}>
        {/* <Image
          className={class.image}
          src="/insta.svg"
          alt="instaglam Logo"
          width={22}
          height={22}
        /> */}
        <h2>Instagram</h2>
      </a>
    </div>
  );
}

// Image の補足
// Image を使って public の svg を呼びに行ってるよ。
// 色はとりあえず svg の fill に指定してる。
// Image を使うとデプロイできないので一旦保留。なんで？
