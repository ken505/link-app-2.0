import Image from "next/Image";
import classes

export function Twittersvg() {
  return (
    <Image
      className={classes.image}
      src="/twitter.svg"
      alt="twitter Logo"
      width={21}
      height={21}
    />
  );
}
