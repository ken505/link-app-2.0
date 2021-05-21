import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
  PinterestShareButton,
  PinterestIcon,
  EmailShareButton,
  EmailIcon,
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
      <PinterestShareButton>
        <PinterestIcon size={32} round className={classes.iconStyle} />
      </PinterestShareButton>
      <EmailShareButton subject={"Share Ken's links"} body={url} separator={""}>
        <EmailIcon size={32} round className={classes.iconStyle} />
      </EmailShareButton>
    </div>
  );
}
