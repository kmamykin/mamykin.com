import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */
// sourceInstanceName in the query refers to the name option in the configuration of gatsby-source-filesystem plugin
const allContentImages = graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/jpg|jpeg|png/" }
        sourceInstanceName: { eq: "posts" }
      }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
const Image = ({ alt, title, src }) => (
  <StaticQuery
    query={allContentImages}
    render={data => {
      const foundImage = data.allFile.edges.map(n => n.node).find(n => n.relativePath.endsWith(src))
      if (foundImage) {
        return <Img fluid={foundImage.childImageSharp.fluid} Tag={'div'}/>
      } else {
        // image src is not in the list of content images, render as <img> tag
        return <img alt={alt} title={title} src={src}/>
      }
    }}
  />
)
export default Image
