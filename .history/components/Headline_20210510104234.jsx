import Image from "next/image";
import classes from "./Headline.module.css";

export function Headline(props) {
  return (
    <>
    <h1 className={classes.title}>
      {props.title}
      <Image
        className={classes.icon}
        src="/images/ken.jpg"
        width={25}
        height={25}
      />
    </h1>
    </>
  );
}
