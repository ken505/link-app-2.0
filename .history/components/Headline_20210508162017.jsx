import styles from "../Headline.module.css";

export function Headline(props) {
  return <h1 className={styles.title}>{props.title}</h1>;
}
