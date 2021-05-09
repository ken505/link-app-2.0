import Image from "next/Image";

export function Twitter() {
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
