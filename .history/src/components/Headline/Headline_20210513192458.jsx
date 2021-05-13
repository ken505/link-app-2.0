import Image from "next/image";
import classes from "./Headline.module.css";

export function Headline(props) {
  return (
    <>
      <h1 className={classes.title}>{props.title}</h1>
      <Image
        className={classes.image}
        src="/images/ken.jpg"
        width={60}
        height={60}
      />
    </>
  );
}
