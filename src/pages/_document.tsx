import { Html, Head, Main, NextScript } from "next/document";

const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${assetPrefix}/favicon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${assetPrefix}/favicon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${assetPrefix}/favicon.png`}
        />
        <link rel="manifest" href={`${assetPrefix}/site.webmanifest`} />
        <link
          rel="mask-icon"
          href={`${assetPrefix}/favicon.png`}
          color="#9F86C0"
        />
        <meta name="msapplication-TileColor" content="#9F86C0" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
