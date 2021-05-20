import Head from "next/head";

export function Tab(props) {
  return (
    <Head>
      <title>{props.title}</title>
      {/* <meta>
        {props.name}
        {props.content}
      </meta> */}
      {/* <meta name="Link" content="Link collection" image={"https://twitter.com/ken_tsx"} />
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${process.env.SITE_URL}/ogp_large.png`} />
      <meta name="twitter:card" content="summary_large_image"/> */}

      <meta name="twitter:card" content="summary" />
      {/* <meta name="twitter:site" content="@nytimesbits" /> */}
      {/* <meta name="twitter:creator" content="@nickbilton" /> */}
      <meta property="og:url" content="https://link-app-pink.vercel.app/" />
      <meta property="og:title" content="Ken's links" />
      <meta
        property="og:description"
        content="This is a site that collects my various SNS accounts, self-introduction, and high-resolution images of cats 🐈"
      />
      <meta
        property="og:image"
        content="https://user-images.githubusercontent.com/68226398/118977762-7d737280-b9b1-11eb-891d-9c6e1cab1c2f.jpg"
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
