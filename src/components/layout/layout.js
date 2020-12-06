import React from "react"
import "./layout.css"
import { GlobalStyle } from "../styles/GlobalStyle"
import Header from "./Header"
import Footer from "./Footer"

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Footer />

      <main>{children}</main>
    </>
  )
}

export default Layout
