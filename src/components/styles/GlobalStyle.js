import { createGlobalStyle } from "styled-components"
import { themes } from "./ColorStyles"

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${themes.light.backgroundColor};
    @media (prefers-color-scheme: dark) {
  background: ${themes.dark.backgroundColor}
}
  display: grid; 
  grid-template-columns: 1fr;

  }
`
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
