import React from "react"
import "./layout.css"
import { GlobalStyle } from "../styles/GlobalStyle"
import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  )
}

export default Layout

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1f;
  gap: 30px;
`
