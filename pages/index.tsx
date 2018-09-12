import * as React from "react"
import Layout from "../components/MyLayout"
import Link from "next/link"
import fetch from "isomorphic-unfetch"
import {NextSFC} from "next"

interface Props {
    shows: any
}

const Index: NextSFC<Props> = (props) => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(({show}) => (
                <li key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
)

Index.getInitialProps = async () => {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=batman")
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)

    return {
        shows: data,
    }
}

export default Index
