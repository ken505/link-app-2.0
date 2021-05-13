import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
  <Image
                  className={classes.image}
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                />
  <Component {...pageProps} />
    </>
  );
}

export default MyApp;
