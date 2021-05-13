import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Head>
    <title>{props.title}</title>
  <Component {...pageProps} />);
    {/* <meta>
      {props.name}
      {props.content}
    </meta> */}
    {/* <meta name="Link" content="Link collection" /> */}

    {/* meta tag に props を持たせるとブラウザに怒られる。 */}
    {/* <meta>
      {props.name}
      {props.content}
    </meta> */}
    <link rel="icon" href="/favicon.ico" />
  </Head>
}

export default MyApp;
