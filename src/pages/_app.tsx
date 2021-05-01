import "../styles/globals.css"

import { Provider } from "react-redux"
import type { AppProps } from "next/app"

import store from "../app/store"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import Logo from "../assets/Logo"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
)

function StorybookAppBar(): JSX.Element {
  const classes = useStyles()

  // eslint-disable-next-line unicorn/no-null
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar
        variant="dense"
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <Logo
          style={{
            height: "40px",
            margin: "10px 20px 10px 0px",
          }}
        />
        <Typography variant="h6" className={classes.title}>
          Weiderbatte
        </Typography>

        <AccountCircleIcon
          fontSize="large"
          style={{ marginLeft: "15px" }}
          onClick={() => {}}
        />
      </Toolbar>
    </AppBar>
  )
}
