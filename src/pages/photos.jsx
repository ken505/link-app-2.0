import Link from "next/link";
import classes from "../styles/Home.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { Tab } from "src/components/Tab/Tab";
import { Headline } from "src/components/Headline/Headline";

const ITEMS = [
  {
    src:
      "https://user-images.githubusercontent.com/68226398/118645189-977a4d00-b819-11eb-9696-d75e91fef60a.JPG",
    alt: "Store Manager Rask's photo",
    description: "Store Manager Rask",
  },
  {
    src:
      "https://user-images.githubusercontent.com/68226398/118645192-98ab7a00-b819-11eb-9999-2c2a3970a95a.JPG",
    alt: "Assistant Store Manager Sakura's photo",
    description: "Assistant Store Manager Sakura",
  },
  {
    src:
      "https://user-images.githubusercontent.com/68226398/118645474-f213a900-b819-11eb-8e8a-fefc37f57050.JPG",
    alt: " Sales Manager Yukichi's photo ",
    description: " Sales Manager Yukichi ",
  },
  {
    src:
      "https://user-images.githubusercontent.com/68226398/118645417-e4f6ba00-b819-11eb-9829-c47bea5f76f7.JPG",
    alt: " Burio's photo ",
    description: " Burio ",
  },
  {
    src:
      "https://user-images.githubusercontent.com/68226398/118645141-892c3100-b819-11eb-9f73-805ab164e9c4.JPG",
    alt: " En's photo ",
    description: " En ",
  },
  {
    src:
      "https://user-images.githubusercontent.com/68226398/118645166-921d0280-b819-11eb-961a-43fd9e4bb727.JPG",
    alt: " Huku's photo ",
    description: " Huku ",
  },
  {
    src:
      "https://user-images.githubusercontent.com/68226398/118645453-ede78b80-b819-11eb-94c3-1d8a291caf9a.JPG",
    alt: " Ikura's photo ",
    description: " Ikura ",
  },
  {
    src:
      "https://user-images.githubusercontent.com/68226398/118645174-93e6c600-b819-11eb-88f7-d05c892b9d0f.JPG",
    alt: " Kai's photo ",
    description: " Kai ",
  },
  {
    src:
      "https://user-images.githubusercontent.com/68226398/118645180-9517f300-b819-11eb-8a29-dae35c17e81f.JPG",
    alt: " Komari's photo ",
    description: " Komari ",
  },
  {
    src:
      "https://user-images.githubusercontent.com/68226398/118645185-96492000-b819-11eb-9a0c-c76bf0cbcf12.JPG",
    alt: " Kosen's photo ",
    description: " Kosen ",
  },
  {
    src:
      "https://user-images.githubusercontent.com/68226398/118645459-ee802200-b819-11eb-8d16-d9116b94f9ed.JPG",
    alt: " Mau's photo ",
    description: " Mau ",
  },
  {
    src:
      "https://user-images.githubusercontent.com/68226398/118645462-efb14f00-b819-11eb-9ead-78162cde2a83.JPG",
    alt: " Meron's photo ",
    description: " Meron ",
  },
  {
    src:
      "https://user-images.githubusercontent.com/68226398/118645466-f049e580-b819-11eb-9108-b60bd333f89b.JPG",
    alt: " Mikan's photo ",
    description: " Mikan ",
  },
  {
    src:
      "https://user-images.githubusercontent.com/68226398/118645470-f17b1280-b819-11eb-9705-4a353ff7c1e0.JPG",
    alt: " Sagawatoko's photo ",
    description: " Sagawa Toko ",
  },
  {
    src:
      "https://user-images.githubusercontent.com/68226398/118645472-f213a900-b819-11eb-9451-1f280cf3814f.JPG",
    alt: " Sanbo's photo ",
    description: " Sanbo ",
  },
  {
    src:
      "https://user-images.githubusercontent.com/68226398/118645196-99dca700-b819-11eb-8eca-9d3fd454272f.JPG",
    alt: " Satuki's photo ",
    description: " Satuki ",
  },
  {
    src:
      "https://user-images.githubusercontent.com/68226398/118645198-9a753d80-b819-11eb-8bf3-462173972952.JPG",
    alt: " Sumire's photo ",
    description: " Sumire ",
  },
  {
    src:
      "https://user-images.githubusercontent.com/68226398/118645211-9c3f0100-b819-11eb-8c68-8a4044321870.JPG",
    alt: " Susisu's photo ",
    description: " Susisu ",
  },
  {
    src:
      "https://user-images.githubusercontent.com/68226398/118645214-9cd79780-b819-11eb-80c1-5c0cbfe46aec.JPG",
    alt: " Tarao's photo ",
    description: " Tarao ",
  },
  {
    src:
      "https://user-images.githubusercontent.com/68226398/118645224-9ea15b00-b819-11eb-8fbd-43fcd10bb04d.JPG",
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
      <div className={classes.catImageGrid}>
        {ITEMS.map((item) => {
          return (
            <div key={item.src} className={classes.catImage}>
              {item.src ? (
                <img
                  className={classes.catImageBorder}
                  src={item.src}
                  alt={item.alt}
                  // width={256}
                  // height={144}
                />
              ) : null}
              {item.description ? (
                <p className={classes.catName}>{item.description}</p>
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
