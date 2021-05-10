import * as React from "react"
import { Provider } from "react-redux"
import Head from "next/head"
import { ThemeProvider } from "@material-ui/core/styles"
import { CacheProvider } from "@emotion/react"
import CssBaseline from "@material-ui/core/CssBaseline"
import createCache from "@emotion/cache"
import type { AppProps } from "next/app"

import store from "../app/store"
import theme from "../theme"
import Layout from "../components/Layout"
import "../styles/globals.css"

export const cache = createCache({ key: "css", prepend: true })

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  return (
    <Provider store={store}>
      <CacheProvider value={cache}>
        <Layout>
          <>
            <Head>
              <title>My page</title>
              <meta
                name="viewport"
                content="initial-scale=1, width=device-width"
              />
            </Head>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </>
        </Layout>
      </CacheProvider>
    </Provider>
  )
}
