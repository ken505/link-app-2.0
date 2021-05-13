import Image from "next/image";
import Link from "next/link";
import classes from "../styles/Home.module.css";
import { Tab } from "src/components/Tab/Tab";
import { Headline } from "src/components/Headline/Headline";

export default function Home() {
  return (
    <div className={classes}>
      <Tab title="About Ken" />
      <Headline title="Photos 😽" />
      <Link href="/">
        <h2>Back to links</h2>
      </Link>
      <Image
        // className="next-image"
        // ホバーした時の css を足す。
        src="/images/photo2.jpg"
        alt="Store Manager Rask's Photo"
        width={300}
        height={300}
      />
      <p>Store Manager Rask</p>
      <Image
        src="/images/photo.jpg"
        alt="Assistant Store Manager Sakura's Photo"
        width={300}
        height={300}
      />
      <p>Assistant Store Manager Sakura</p>
    </div>
  );
}
