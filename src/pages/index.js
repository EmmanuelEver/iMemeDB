import React from "react"
import Layout from "../components/layout"
import HomeHero from "../components/hero/HomeHero"
import FeaturedMemes from "../components/FeaturedMemes"

const IndexPage = () => (
  <Layout>
    <HomeHero/>
    <FeaturedMemes/>
  </Layout>
)

export default IndexPage
