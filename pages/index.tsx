import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Index: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>nextailp</title>
        <meta name="description" content="a domain parking example based on Next.js & Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <p>
          {router.pathname}
        </p>

        <h1>
          <Link href="https://nextailp.pages.dev"><a>nextailp.pages.dev</a></Link>
        </h1>

        <p>
          powered by <Link href="https://github.com/a24k/nextailp"><a>nextailp</a></Link> - a domain parking example based on <Link href="https://nextjs.org/"><a>Next.js</a></Link> & <Link href="https://tailwindcss.com/"><a>Tailwind CSS</a></Link>.
        </p>

      </main>
    </>
  )
}

export default Index
