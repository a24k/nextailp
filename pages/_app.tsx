import type { AppProps } from 'next/app'

import '../styles/globals.css'
import Layout from '../compoments/layout'

import { useState } from 'react'
import { useIsomorphicLayoutEffect } from 'usehooks-ts'

function NextailpApp({ Component, pageProps }: AppProps) {
  const [host, setHost] = useState<string>('nextailp.pages.dev');
  const [path, setPath] = useState<string>('/');

  useIsomorphicLayoutEffect(() => {
    setHost(window.location.host);
    setPath(window.location.pathname);
  });

  const layoutProps = { host, path };

  return (
    <Layout {...layoutProps}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default NextailpApp
