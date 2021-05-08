import styles from "../styles/Home.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by Ken
           {/* <img src="/vercel.svg" alt="Vercel Logo" className={classese.logo} /> */}
      </a>
    </footer>
  );
}