import Head from 'next/head'

export default function HtmlHead ({
  title
}) {
  return (
    <Head>
      <title>
        {
          title
            ? `${title} - Site Name`
            : 'Site Name'
        }
      </title>
    </Head>
  )
}
