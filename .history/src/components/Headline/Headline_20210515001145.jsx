import Image from "next/image";
import classes from "./Headline.module.css";

export function Headline(props) {
  return (
    <div>
      <h1 className={classes.title}>{props.title}</h1>
      <div>

      <Image
        className={classes.image}
        src="/images/ken.jpg"
        width={60}
        height={60}
      />
      </div>
    </div >
  );
}
