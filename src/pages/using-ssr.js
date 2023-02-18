import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { createClient } from "contentful"
import axios from "axios"
import ImageCard from "../components/ImageCard"

const UsingSSR = ({ serverData }) => {
  console.log(serverData)
  return (
    <Layout>
      <h1>test</h1>
      {serverData.map((item) =>  (
      <ImageCard {...item} />
      ))}
    </Layout>
  )
}

export const Head = () => <Seo title="Using SSR" />

export default UsingSSR

export async function getServerData() {
  try {
    const data = await axios.get(`https://cdn.contentful.com/spaces/fzqb4a3oqk4f/environments/master/entries?access_token=QDOe_tOfFIVZMcERftqeHlGJRf6xfSGi3BWJkiFUln4&content_type=test`)
    return {
      props: data.data.items,
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
