import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
<button>🐱</button>
  <Component {...pageProps} />
    </>
  );
}

export default MyApp;
