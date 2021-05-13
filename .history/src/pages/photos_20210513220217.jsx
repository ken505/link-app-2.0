import Image from "next/image";
import Link from "next/link";
import classes from "../styles/Home.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { Tab } from "src/components/Tab/Tab";
import { Headline } from "src/components/Headline/Headline";

const ITEMS = [
  {
    src: "/images/photo2.jpg",
    alt: "Store Manager Rask's Photo",
  },
  {
    src: "/images/photo.jpg",
    alt: "Assistant Store Manager Sakura's Photo",
  },
];

export default function Home() {
  return (
    <div className={classes.container}>
      <Tab title="About Ken" />
      <Headline title="Photos" className={classes.title} />
      <Link href="/">
        <h2 className={classes.backtolinks}>
          <IoIosArrowBack className={classes.IoIosArrowBack} />
          Back to links
        </h2>
      </Link>

      {/* 写真は width300 * height169 */}
      {/* 配置は grid 折り返し的な */}
      {/* スマホサイズで一列固定でいこうかな */}

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
                    {item.src ? <div>{item.src}</div> : null}
                    {item.alt ? <h2>{item.al}</h2> : null}
                  </div>
                  {item.description ? (
                    <p className={classes.description}>{item.description}</p>
                  ) : null}
                </div>
              </a>
            </Link>
          );
        })}
      </div>

      <Image
        className={classes.image}
        // src=
        // alt=
        // width={300}
        // height={300}
      />
      <p>alt属性とおなじ</p>
    </div>
  );
}
