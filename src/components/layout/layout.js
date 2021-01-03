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
      {children}
      <Footer />
    </>
  )
}

export default Layout

// const Wrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 30px;
//   /* width: 100vw;
//   overflow: hidden; */

//   @media (max-width: 450px) {
//     overflow: hidden;
//   }
// `
