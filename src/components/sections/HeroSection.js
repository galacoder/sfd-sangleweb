import React from "react"
import { Link } from "gatsby"

function HeroSection() {
  return (
    <div>
      <img src="/images/logos/sangletech-logo.png" alt="logo" />
      <h1>VƯƠN TẦM BẢN THÂN</h1>
      <p>BƯỚC ĐI TỰ TIN TRÊN HÀNH TRÌNH 4.0</p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </div>
  )
}

export default HeroSection
