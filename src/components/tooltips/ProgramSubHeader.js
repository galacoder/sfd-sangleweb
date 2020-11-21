import React from "react"
import styled from "styled-components"
import { programSubmenuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"

export default function ProgramSubHeader(props) {
  const { programSubmenuIsOpen } = props

  return (
    <Wrapper isOpen={programSubmenuIsOpen}>
      {programSubmenuData.map((item, index) => (
        <MenuButton item={item} key={index} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* Position */
  position: absolute;
  right: 350px;
  top: 60px;
  z-index: 1;

  /* Box-model */
  display: grid;
  grid-template-columns: 150px;

  /* Visual */
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 20px;
  opacity: ${props => (props.isOpen ? "1" : "0")};
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  padding: 20px;
  gap: 20px;

  /* Animation */
  transition: 0.3s ease-in-out;
  transform: ${props =>
    props.isOpen
      ? "skewY(0) rotate(0) translateY(0)"
      : "skewY(-5deg) rotate(5deg) translateY(-30px)"};
`
