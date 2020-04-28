import React from "react"
import { Link } from "gatsby"


import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/home/About"
import Services from "../components/home/Services"


const index = () => {
  return (
    <Layout>
      <SimpleHero>
        <Banner title={`Continue Exploring`}
                info={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, libero.`}>
          <Link to={`/tours`} className={`btn-white`}>explore tours</Link>
        </Banner>
      </SimpleHero>
      <About />
      <Services />
    </Layout>
  )
}

export default index
