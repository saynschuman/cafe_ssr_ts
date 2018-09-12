import * as React from "react"

export interface StatelessPage<P = {}> extends React.SFC<P> {
    getInitialProps?: (context: any) => Promise<P>
}