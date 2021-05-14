import Image from "next/image";
import Link from "next/link";
import classes from "../styles/Home.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { Tab } from "src/components/Tab/Tab";
import { Headline } from "src/components/Headline/Headline";

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

      <Image className={classes.IoIosArrowBack} />
        className={classes.image}
        src="/images/Rask.jpg"
        alt="Store Manager Rask's photo"
        width={256}
        height={144}
      />
      <p>Store Manager Rask</p>
      <Image
        src="/images/Sakura.jpg"
        alt="Assistant Store Manager Sakura's photo"
        width={256}
        height={144}
      />
      <p>Assistant Store Manager Sakura</p>
      <Image
        src="/images/Yukichi.jpg"
        alt=" Sales Manager Yukichi's photo "
        width={256}
        height={144}
      />
      <p>Sales Manager Yukichi</p>
      <Image
        src="/images/Kai.jpg"
        alt=" Kai's photo "
        width={256}
        height={144}
      />
      <p>Kai</p>
      <Image
        src="/images/Sumire.jpg"
        alt=" Sumire's photo "
        width={256}
        height={144}
      />
      <p>Sumire</p>
      <Image
        src="/images/Yuzu.jpg"
        alt="Yuzu's photo "
        width={256}
        height={144}
      />
      <p>Yuzu</p>
      <Image
        src="/images/Kosen.jpg"
        alt=" Kosen's photo"
        width={256}
        height={144}
      />
      <p>Kosen</p>
      <Image
        src="/images/Satuki.jpg"
        alt=" Satuki's photo"
        width={256}
        height={144}
      />
      <p>Satuki</p>
      <Image src="/images/En.jpg" alt=" En's photo" width={256} height={144} />
      <p>En</p>
      <Image
        src="/images/Susisu.jpg"
        alt=" Susisu's photo"
        width={256}
        height={144}
      />
      <p>Susisu</p>
      <Image
        src="/images/Huku.jpg"
        alt="Huku's photo "
        width={256}
        height={144}
      />
      <p>Huku</p>
      <Image
        src="/images/Sanbo.jpg"
        alt="Sanbo's photo "
        width={256}
        height={144}
      />
      <p>Sanbo</p>
      <Image
        src="/images/Tarao.jpg"
        alt=" Tarao's photo"
        width={256}
        height={144}
      />
      <p>Tarao</p>
      <Image
        src="/images/Mikan.jpg"
        alt="Mikan's photo "
        width={256}
        height={144}
      />
      <p>Mikan</p>
      <Image
        src="/images/Sagawatoko.jpg"
        alt="Sagawa Toko's photo "
        width={256}
        height={144}
      />
      <p>Sagawa Toko</p>
      <Image
        src="/images/Komari.jpg"
        alt="Komari's photo "
        width={256}
        height={144}
      />
      <p>Komari</p>
      <Image
        src="/images/Mau.jpg"
        alt=" Mau's photo"
        width={256}
        height={144}
      />
      <p>Mau</p>
      <Image
        src="/images/Burio.jpg"
        alt="Burio's photo "
        width={256}
        height={144}
      />
      <p>Burio</p>
      <Image
        src="/images/Ikura.jpg"
        alt="Ikura's photo "
        width={256}
        height={144}
      />
      <p>Ikura</p>
      <Image
        src="/images/Meron.jpg"
        alt=" Meron's photo"
        width={256}
        height={144}
      />
      <p>Meron</p>
    </div>
  );
}
