import * as React from "react"
import { Link } from "gatsby"

import { createClient } from "contentful"
import axios from "axios"

const ImageCard = props => {
  const [loading, setLoading] = React.useState(true)
  const [imageData, setImageData] = React.useState({})

  React.useEffect(async () => {
    const imageId = props.fields.imageFIle.sys.id
    const image = await axios.get(
      `https://cdn.contentful.com/spaces/fzqb4a3oqk4f/environments/master/assets/${imageId}?access_token=QDOe_tOfFIVZMcERftqeHlGJRf6xfSGi3BWJkiFUln4`
    )
    console.log(image)
    setImageData(image.data.fields.file)
    setLoading(false)
  }, [props])

  console.log("IMAGE:", props)
  return <div>{loading ? <div>Loading</div> : <img src={imageData.url} />}</div>
}

export default ImageCard
