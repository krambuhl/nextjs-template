import Document, { Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="" />
          <meta name="author" content="" />

          {/*
            <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css?display=swap" rel="stylesheet" />
          */}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default CustomDocument
