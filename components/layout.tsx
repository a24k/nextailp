import type { ReactElement } from 'react'

import Head from 'next/head'
import Link from 'next/link'

type LayoutProps = Required<{
  readonly host: string;
  readonly path: string;
  readonly children: ReactElement
}>

const Layout = ({ host, path, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{ (host === ' ') ? 'nextailp' : host }</title>
        <meta name="description" content="a domain parking example based on Next.js & Tailwind CSS." />
      </Head>

      <main>
        <p>+ NOT IN SERVICE +</p>

        <div className={ (host === ' ') ? 'card opaque' : 'card' }>
          <h1><Link href="/"><a>{host}</a></Link></h1>
          { (path !== '/') && <h2>{path}</h2> }
          {children}
        </div>

        <p>powered by <Link href="https://github.com/a24k/nextailp"><a>nextailp</a></Link> - a domain parking example based on <Link href="https://nextjs.org/"><a>Next.js</a></Link> & <Link href="https://tailwindcss.com/"><a>Tailwind CSS</a></Link>.</p>
      </main>
    </>
  )
}

export default Layout
