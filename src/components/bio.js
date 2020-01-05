import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <p className="blog-bio">
            Written by <a href='https://yagrawal.dev' className="anchor"><strong>{author}</strong></a>.
          </p>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default Bio
