import React from "react"
import Layout from "../components/MyLayout"
import fetch from "isomorphic-unfetch"
import {NextSFC} from "next"

interface Props {
    show: any
}

const Post: NextSFC<Props> = (props) => {
    return (
        <Layout>
            <h1>{props.show.name}</h1>
            <p>{props.show.summary.replace(/<[/]?p>/g, "")}</p>
            <img src={props.show.image.medium}/>
        </Layout>
    )
}

Post.getInitialProps = async (context) => {
    const { id } = context.query
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    console.log(`Fetched show: ${show.name}`)

    return { show }
}

export default Post