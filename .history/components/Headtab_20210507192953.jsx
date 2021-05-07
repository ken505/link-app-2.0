import Head from "next/head";

export function Headtab(props) {
  return (
    <Head>
      <title>{props.title}</title>
      {/* <meta name="link" content="link" /> */}
      <meta name="link" content="link" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
