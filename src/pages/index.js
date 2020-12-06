import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import BusinessSection from "../components/sections/BussinessSection"
import HeroSection from "../components/sections/HeroSection"
import PublicFeatureSection from "../components/sections/PublicFeatureSection"
import WarriorSection from "../components/sections/WarriorSection"
import YoutubeSection from "../components/sections/YoutubeSection"
import BlogSection from "../components/sections/BlogSection"
import Footer from "../components/layout/Footer"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <PublicFeatureSection />
      <WarriorSection />
      <BusinessSection />
      <YoutubeSection />
      <BlogSection />
      <Footer />
    </Layout>
  )
}

export default IndexPage
