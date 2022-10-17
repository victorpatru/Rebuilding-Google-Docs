import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Google Docs</title>
        <link rel="icon" href="/google_docs_favicon.webp" />
      </Head>
    </div>
  )
}

export default Home
