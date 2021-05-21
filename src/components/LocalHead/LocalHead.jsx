import Head from "next/head";

export function LocalHead(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="twitter:card" content={props.cardSize} />
      <meta property="og:url" content={props.ogUrl} />
      <meta property="og:title" content={props.ogTitle} />
      <meta property="og:description" content={props.ogDescription} />
      <meta property="og:image" content={props.ogImage} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
