import Head from "next/head";

export function Tab(props) {
  return (
    <Head>
      <title>{props.title}</title>
      {/* <meta>
        {props.name}
        {props.content}
      </meta> */}
      {/* <meta name="twitter:card" content="summary_large_image"/> */}
      {/* <meta name="twitter:card" content="summary" /> */}
      <meta name="twitter:card" content={props.cardSize} />
      {/* <meta property="og:url" content="https://link-app-pink.vercel.app/" /> */}
      <meta property="og:url" content={props.ogUrl} />
      {/* <meta property="og:title" content="Ken's links" /> */}
      <meta property="og:title" content={props.ogTitle} />
      {/* <meta
        property="og:description"
        content="This is a site that collects my various SNS accounts, self-introduction, and high-resolution images of cats 🐈"
      /> */}
      <meta
        property="og:description"
        content={props.ogDescription}
      />
      {/* <meta
        property="og:image"
        content="https://user-images.githubusercontent.com/68226398/118977762-7d737280-b9b1-11eb-891d-9c6e1cab1c2f.jpg"
      /> */}
      <meta
        property="og:image"
        content={props.ogImage}
      />

      {/* meta tag に props を持たせるとブラウザに怒られる。 */}
      {/* <meta>
        {props.name}
        {props.content}
      </meta> */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
