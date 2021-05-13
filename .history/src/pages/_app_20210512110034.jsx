import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
<button>ねこ</button>
  <Component {...pageProps} />
    </>
  );
}

export default MyApp;
