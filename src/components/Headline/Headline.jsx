import classes from "./Headline.module.css";

export const Headline = (props) => {
  return <h1 className={classes.title}>{props.title}</h1>;
};
