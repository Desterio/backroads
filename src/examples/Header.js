import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const getSiteMetadata = graphql`
    query {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`

const Header = () => {

  const { site: { siteMetadata } } = useStaticQuery(getSiteMetadata)

  console.log(siteMetadata)

  return (
    <div>
      <h1>Title: {siteMetadata.title}</h1>
      <h1>Author: {siteMetadata.author}</h1>
      <p>Description: {siteMetadata.description}</p>
    </div>
  )
}

export default Header