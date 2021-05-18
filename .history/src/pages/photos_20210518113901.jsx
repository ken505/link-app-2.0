import Image from "next/image";
import Link from "next/link";
import classes from "../styles/Home.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { Tab } from "src/components/Tab/Tab";
import { Headline } from "src/components/Headline/Headline";

const ITEMS = [
  {
    src: "/images/Rask.jpg",
    alt: "Store Manager Rask's photo",
    description: "Store Manager Rask",
  },
  {
    src: "/images/Sakura.jpg",
    alt: "Assistant Store Manager Sakura's photo",
    description: "Assistant Store Manager Sakura",
  },
  {
    src: "/images/Yukichi.jpg",
    alt: " Sales Manager Yukichi's photo ",
    description: " Sales Manager Yukichi ",
  },
  {
    src: "/images/Burio.jpg",
    alt: " Burio's photo ",
    description: " Burio ",
  },
  {
    src: "/images/En.jpg",
    alt: " En's photo ",
    description: " En ",
  },
  {
    src: "/images/Huku.jpg",
    alt: " Huku's photo ",
    description: " Huku ",
  },
  {
    src: "/images/Ikura.jpg",
    alt: " Ikura's photo ",
    description: " Ikura ",
  },
  {
    src: "/images/Kai.jpg",
    alt: " Kai's photo ",
    description: " Kai ",
  },
  {
    src: "/images/Komari.jpg",
    alt: " Komari's photo ",
    description: " Komari ",
  },
  {
    src: "/images/Kosen.jpg",
    alt: " Kosen's photo ",
    description: " Kosen ",
  },
  {
    src: "/images/Mau.jpg",
    alt: " Mau's photo ",
    description: " Mau ",
  },
  {
    src: "/images/Meron.jpg",
    alt: " Meron's photo ",
    description: " Meron ",
  },
  {
    src: "/images/Mikan.jpg",
    alt: " Mikan's photo ",
    description: " Mikan ",
  },
  {
    src: "/images/Sagawatoko.jpg",
    alt: " Sagawatoko's photo ",
    description: " Sagawa Toko ",
  },
  {
    src: "/images/Sanbo.jpg",
    alt: " Sanbo's photo ",
    description: " Sanbo ",
  },
  {
    src: "/images/Satuki.jpg",
    alt: " Satuki's photo ",
    description: " Satuki ",
  },
  {
    src: "/images/Sumire.jpg",
    alt: " Sumire's photo ",
    description: " Sumire ",
  },
  {
    src: "/images/Susisu.jpg",
    alt: " Susisu's photo ",
    description: " Susisu ",
  },
  {
    src: "/images/Tarao.jpg",
    alt: " Tarao's photo ",
    description: " Tarao ",
  },
  {
    src: "/images/Yuzu.jpg",
    alt: " Yuzu's photo ",
    description: " Yuzu ",
  },
];

export default function Home() {
  return (
    <div className={classes.container}>
      <Tab title="About Ken" />
      <Headline title="Photos" />
      <Link href="/">
        <h2 className={classes.backtolinks}>
          <IoIosArrowBack className={classes.IoIosArrowBack} />
          Back to links
        </h2>
      </Link>
      <div>
        {ITEMS.map((item) => {
          return (
            <div key={item.src} className={classes.catImage}>
              {item.src ? (
                <Image
                  className={classes.catImageBorder}
                  src={item.src}
                  alt={item.alt}
                  width={256}
                  height={144}
                />
              ) : null}
              {item.description ? (
                <p className={classes.catName}>
                  {item.description}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
      {/* 写真は width300 * height169 */}
      {/* 配置は grid 折り返し的な */}
      {/* スマホサイズで一列固定でいこうかな */}
    </div>
  );
}
