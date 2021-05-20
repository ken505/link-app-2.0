import { useState } from "react";
import classes from "./Like.module.css";

export const LikeButton = () => {
  const [like, setLike] = useState({ count: 0, liked: false });

  const onClick = () => {
    setLike({
      count: like.count + (like.liked ? -1 : 1),
      liked: !like.liked,
    });
  };

  return (
    <button className={classes.like} onClick={onClick}>
      {like.liked ? "✔" : ""}Like! {like.count}
    </button>
  );
};
