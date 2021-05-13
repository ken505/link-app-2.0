import classes from "./T.module.css";

const ITEMS = [
  {
    href: "https://twitter.com/ken_tsx",
    title: "Twitter",
    src: "/twitter.svg",
    alt: "twitter Logo",
    width: 19,
    height: 19,
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
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  // fill="white"
                />
              ) : null}
              <h2>{item.title}</h2>

              {/* 👇説明が必要ならどうぞ */}
              {/* <p>{item.description}</p> */}
              
            </a>
          </Link>
        );
      })}
    </div>
  );
}
