import React from "react"
import Layout from "../components/layout"
import HomeHero from "../components/hero/HomeHero"
import FeaturedMemes from "../components/FeaturedMemes"
import Subscribe from "../components/Subscribe"


const IndexPage = () => (
  <Layout>
    <HomeHero/>
    <FeaturedMemes/>
    <Subscribe/>
  </Layout>
)

export default IndexPage
