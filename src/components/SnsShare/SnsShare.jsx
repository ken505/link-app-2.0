import {
  FacebookShareButton,
  FacebookIcon,
  FacebookShareCount,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "react-share";
import classes from "./SnsShare.module.css";

export function SnsShare(props) {
  const { url, title } = props;

  return (
    <div className={classes.iconGrid}>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round className={classes.iconStyle} />
      </TwitterShareButton>
      <LineShareButton url={url} title={title}>
        <LineIcon size={32} round className={classes.iconStyle} />
      </LineShareButton>
      <FacebookShareButton url={url} className={classes.iconStyle}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
  );
}
