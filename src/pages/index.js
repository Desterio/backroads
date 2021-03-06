import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/home/About"
import Services from "../components/home/Services"
import StyledHero from "../components/StyledHero"
import FeaturedTours from "../components/home/FeaturedTours"


const index = ({data}) => {
  return (
    <Layout>
      <StyledHero home={true} img={data.defaultBcg.childImageSharp.fluid}>
        <Banner title={`Continue Exploring`}
                info={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, libero.`}>
          <AniLink fade to={`/tours`} className={`btn-white`}>explore tours</AniLink>
        </Banner>
      </StyledHero>
      <About/>
      <Services/>
      <FeaturedTours />
    </Layout>
  )
}

export default index

export const query = graphql`
    query {
    defaultBcg: file(relativePath: {eq: "defaultBcg.jpeg"} ) {
        childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
}
`