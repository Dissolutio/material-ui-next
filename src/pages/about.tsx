import * as React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { Box } from "@material-ui/core"

import ProTip from "../components/ProTip"
import Link from "../components/Link"

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-alpha with TypeScript example
        </Typography>
        <Link href="/">Go to the main page</Link>
        <ProTip />
      </Box>
    </Container>
  )
}
