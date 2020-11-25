import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"
import PublicFeatureSection from "../components/sections/PublicFeatureSection"
import WarriorSection from "../components/sections/WarriorSection"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <PublicFeatureSection />
      <WarriorSection />
    </Layout>
  )
}

export default IndexPage
