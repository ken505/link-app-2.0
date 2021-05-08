import Head from "next/head";

export function Tab(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="Link" content="Link collection" />

      
      {/* <meta>
        {props.name}
        {props.content}
      </meta> */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
