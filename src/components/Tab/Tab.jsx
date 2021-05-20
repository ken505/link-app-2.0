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
      <meta name="twitter:site" content="@nytimesbits" />
      <meta name="twitter:creator" content="@nickbilton" />
      <meta
        property="og:url"
        content="http://bits.blogs.nytimes.com/2011/12/08/a-twitter-for-my-sister/"
      />
      <meta property="og:title" content="A Twitter for My Sister" />
      <meta
        property="og:description"
        content="In the early days, Twitter grew so quickly that it was almost impossible to add new features because engineers spent their time trying to keep the rocket ship from stalling."
      />
      <meta
        property="og:image"
        content="http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg"
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
