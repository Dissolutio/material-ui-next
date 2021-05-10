import React, { CSSProperties } from "react"

export default function Logo({
  style,
}: {
  style?: CSSProperties
}): JSX.Element {
  return <img style={style} src={"/sb-logo.svg"} alt={`logo`} />
}
