import Head from "next/head";

export function Head(props) {
  return (
    <Head>
      <title>Ken's link</title>
      <meta name="link" content="link" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}