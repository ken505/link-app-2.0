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


      <imageArea className={classes.photoImage}>
      <catImage>
       
        <p className={classes.catName}>Store Manager Rask</p>
      </catImage>
      <catImage>

      <Image
        src="/images/Sakura.jpg"
        alt="Assistant Store Manager Sakura's photo"
        width={256}
        height={144}
      />
      <p>Assistant Store Manager Sakura</p>
      </catImage>
      <catImage>

      <Image
        src="/images/Yukichi.jpg"
        alt=" Sales Manager Yukichi's photo "
        width={256}
        height={144}
      />
      <p>Sales Manager Yukichi</p>
      </catImage>
      <catImage>
      <Image
        src="/images/Kai.jpg"
        alt=" Kai's photo "
        width={256}
        height={144}
      />
      <p>Kai</p>
      </catImage>
      <catImage>
      <Image
        src="/images/Sumire.jpg"
        alt=" Sumire's photo "
        width={256}
        height={144}
      />
      <p>Sumire</p>
      </catImage>
      <catImage>
      <Image
        src="/images/Yuzu.jpg"
        alt="Yuzu's photo "
        width={256}
        height={144}
      />
      <p>Yuzu</p>
      </catImage>
      <catImage>
      <Image
        src="/images/Kosen.jpg"
        alt=" Kosen's photo"
        width={256}
        height={144}
      />
      <p>Kosen</p>
      </catImage>
      <catImage>
      <Image
        src="/images/Satuki.jpg"
        alt=" Satuki's photo"
        width={256}
        height={144}
      />
      <p>Satuki</p>
      </catImage>
      <catImage>
      <Image src="/images/En.jpg" alt=" En's photo" width={256} height={144} />
      <p>En</p>
      <Image
        src="/images/Susisu.jpg"
        alt=" Susisu's photo"
        width={256}
        height={144}
      />
      <p>Susisu</p>
      </catImage>
      <catImage>
      <Image
        src="/images/Huku.jpg"
        alt="Huku's photo "
        width={256}
        height={144}
      />
      <p>Huku</p>
      </catImage>
      <catImage>
      <Image
        src="/images/Sanbo.jpg"
        alt="Sanbo's photo "
        width={256}
        height={144}
      />
      <p>Sanbo</p>
      </catImage>
      <catImage>
      <Image
        src="/images/Tarao.jpg"
        alt=" Tarao's photo"
        width={256}
        height={144}
      />
      <p>Tarao</p>
      </catImage>
      <catImage>
      <Image
        src="/images/Mikan.jpg"
        alt="Mikan's photo "
        width={256}
        height={144}
      />
      <p>Mikan</p>
      </catImage>
      <catImage>
      <Image
        src="/images/Sagawatoko.jpg"
        alt="Sagawa Toko's photo "
        width={256}
        height={144}
      />
      <p>Sagawa Toko</p>
      </catImage>
      <catImage>
      <Image
        src="/images/Komari.jpg"
        alt="Komari's photo "
        width={256}
        height={144}
      />
      <p>Komari</p>
      </catImage>
      <catImage>
      <Image
        src="/images/Mau.jpg"
        alt=" Mau's photo"
        width={256}
        height={144}
      />
      <p>Mau</p>
      </catImage>
      <catImage>
      <Image
        src="/images/Burio.jpg"
        alt="Burio's photo "
        width={256}
        height={144}
      />
      <p>Burio</p>
      </catImage>
      <catImage>
      <Image
        src="/images/Ikura.jpg"
        alt="Ikura's photo "
        width={256}
        height={144}
      />
      <p>Ikura</p>
      </catImage>
      <catImage>
      <Image
        src="/images/Meron.jpg"
        alt=" Meron's photo"
        width={256}
        height={144}
      />
      <p>Meron</p>
      </catImage>
      </imageArea>
    </div>
  );
}
