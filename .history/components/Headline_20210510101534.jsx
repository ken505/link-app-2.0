import Image from "next/image";
import classes from "./Headline.module.css";

export function Headline(props) {
  return (
    <h1 className={classes.title}>
      {props.title}
      <Image src="/images/ken.jpg" width={40
      } height={40
      } />
    </h1>
  );
}
