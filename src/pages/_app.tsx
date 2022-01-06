import 'tailwindcss/tailwind.css'
import '@fontsource/work-sans'
import '~/styles/globals.css'

import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'
import { MessageProvider } from '~/lib/message'
import { AuthProvider } from '~/lib/auth'
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }: AppProps) {
  const pageMeta = (Component as any)?.defaultProps?.meta || {}
  const pageSEO = { ...SEO, ...pageMeta }

  return (
    <React.Fragment>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...pageSEO} />
      <MessageProvider>
        // 本当はAuthProvider
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </MessageProvider>
    </React.Fragment>
  )
}

export default MyApp
