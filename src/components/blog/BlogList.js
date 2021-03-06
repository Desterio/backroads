import React from "react"
import {useStaticQuery, graphql} from "gatsby"

import BlogCard from "./BlogCard"
import Title from "../Title"
import styles from "../../css/blog.module.css"

const getPosts = graphql`
    query {
        posts: allContentfulPost(sort: {fields: createdAt, order: ASC}) {
            edges {
                node {
                    published(formatString: "MMMM Do, YYYY")
                    createdAt(formatString: "LLLL")
                    title
                    slug
                    id: contentful_id
                    image {
                        fluid {
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
    }
`

const BlogList = () => {
  const {posts} = useStaticQuery(getPosts)

  return (
    <section className={styles.blog}>
      <Title title={`our`} subtitle={`blogs`} />
      <div className={styles.center}>
        {
          posts.edges.map(({node}) => {
            return <BlogCard key={node.id} blog={node} />
          })
        }
      </div>
    </section>
  )
};

export default BlogList