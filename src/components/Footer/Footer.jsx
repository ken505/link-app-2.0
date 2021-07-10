import classes from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <a
        href="https://nekocafesalondekei.wordpress.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={classes.collaboration}>Collaboration with&nbsp;</span>{" "}
        ねこcafe Salon de Kei 🐈
      </a>
    </footer>
  );
};
