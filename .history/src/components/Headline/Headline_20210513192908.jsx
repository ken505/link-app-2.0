import Image from "next/image";
import classes from "./Headline.module.css";

export function Headline(props) {
  return (
    <div >
      <h1 >{props.title}</h1>
      <Image
        // className={classes.image}
        src="/images/ken.jpg"
        width={60}
        height={60}
      />
    </div >
  );
}
