import Image from "next/image";
import Link from "next/link";
import classes from "../styles/Home.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { Tab } from "src/components/Tab/Tab";
import { Headline } from "src/components/Headline/Headline";

const ITEMS = [
  {
    src: "/images/Rask.JPG",
    alt: "Store Manager Rask's photo",
    description: "Store Manager Rask",
  },
  {
    src: "/images/Sakura.JPG",
    alt: "Assistant Store Manager Sakura's photo",
    description: "Assistant Store Manager Sakura",
  },
  {
    src: "/images/Yukichi.JPG",
    alt: " Sales Manager Yukichi's photo ",
    description: " Sales Manager Yukichi ",
  },
  {
    src: "/images/Burio.JPG",
    alt: " Burio's photo ",
    description: " Burio ",
  },
  {
    src: "/images/En.JPG",
    alt: " En's photo ",
    description: " En ",
  },
  {
    src: "/images/Huku.JPG",
    alt: " Huku's photo ",
    description: " Huku ",
  },
  {
    src: "/images/Ikura.JPG",
    alt: " Ikura's photo ",
    description: " Ikura ",
  },
  {
    src: "/images/Kai.JPG",
    alt: " Kai's photo ",
    description: " Kai ",
  },
  {
    src: "/images/Komari.JPG",
    alt: " Komari's photo ",
    description: " Komari ",
  },
  {
    src: "/images/Kosen.JPG",
    alt: " Kosen's photo ",
    description: " Kosen ",
  },
  {
    src: "/images/Mau.JPG",
    alt: " Mau's photo ",
    description: " Mau ",
  },
  {
    src: "/images/Meron.JPG",
    alt: " Meron's photo ",
    description: " Meron ",
  },
  {
    src: "/images/Mikan.JPG",
    alt: " Mikan's photo ",
    description: " Mikan ",
  },
  {
    src: "/images/Sagawatoko.JPG",
    alt: " Sagawatoko's photo ",
    description: "  ",
  },
  {
    src: "/images/.JPG",
    alt: " 's photo ",
    description: "  ",
  },
  {
    src: "/images/.JPG",
    alt: " 's photo ",
    description: "  ",
  },
  {
    src: "/images/.JPG",
    alt: " 's photo ",
    description: "  ",
  },
  {
    src: "/images/.JPG",
    alt: " 's photo ",
    description: "  ",
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
