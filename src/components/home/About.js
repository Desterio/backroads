import React from "react"
import styles from "../../css/about.module.css"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Title from "../Title"

const getAbout = graphql`
    query aboutImage {
        aboutImage: file(relativePath: {eq: "defaultBcg.jpeg"} ) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`

const About = ({ children }) => {

  const { aboutImage } = useStaticQuery(getAbout)

  return (
    <section className={styles.about}>
      <Title title={`about`} subtitle={`us`}/>
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/*{<img src={img} alt={`about the company`}/>}*/}
            <Img fluid={aboutImage.childImageSharp.fluid}/>
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa natus tempore.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa natus tempore.
          </p>
          <button type={`button`} className={`btn-primary`}>read more</button>
        </article>
      </div>
    </section>
  )
}

export default About