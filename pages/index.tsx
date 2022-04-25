import type { NextPage } from 'next'
import Head from 'next/head'

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>nextailp</title>
        <meta name="description" content="a domain parking example based on Next.js & Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex flex-1 flex-col justify-between items-center">
        <p className="p-2 text-md text-slate-600">
          nextailp.pages.dev
        </p>

        <h1 className="text-6xl text-slate-200">
          nextailp.pages.dev
        </h1>

        <p className="p-2 text-md text-slate-600">
          powered by nextailp - a domain parking example based on Next.js & Tailwind CSS.
        </p>
      </main>
    </>
  )
}

export default Index
