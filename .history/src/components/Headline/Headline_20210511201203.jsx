import Image from "next/image";
import classes from "src/";

export function Headline(props) {
  return (
    <>
      <h1 className={classes.title}>{props.title}</h1>
      <Image
        className={classes.icon}
        src="/images/ken.jpg"
        width={60}
        height={60}
      />
    </>
  );
}
