import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { useIsomorphicLayoutEffect } from 'usehooks-ts'

const Index: NextPage = () => {
  const [host, setHost] = useState<string>('nextailp.pages.dev');
  const [path, setPath] = useState<string>('/');

  useIsomorphicLayoutEffect(() => {
    setHost(window.location.host);
    setPath(window.location.pathname);
  });

  return (
    <>
      <Head>
        <title>nextailp</title>
        <meta name="description" content="a domain parking example based on Next.js & Tailwind CSS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <p>+ NOT IN SERVICE +</p>

        <div className="card">
          <h1><Link href="/"><a>{host}</a></Link></h1>
          <h2>{path}</h2>
        </div>

        <p>powered by <Link href="https://github.com/a24k/nextailp"><a>nextailp</a></Link> - a domain parking example based on <Link href="https://nextjs.org/"><a>Next.js</a></Link> & <Link href="https://tailwindcss.com/"><a>Tailwind CSS</a></Link>.</p>

      </main>
    </>
  )
}

export default Index
