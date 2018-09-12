import * as React from "react"

export const Tags = (props) => {
  return <div>{props.tags.map((tag) => <div>{tag}</div>)}</div>
}
