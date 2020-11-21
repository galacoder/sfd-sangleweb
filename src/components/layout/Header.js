import React, { useState } from "react"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"
import { Link } from "gatsby"
import AboutSubHeader from "../tooltips/AboutSubHeader"
import ProgramSubHeader from "../tooltips/ProgramSubHeader"

// TODO I needa figure out how to fix the submenu error. When I hit the about, program submenu is about and vice versa.
//1. I think the solution to fix this issue is to create MenuToolTip component which can receive props from about or program button. For example, I will receive a specific props (about menu open or program menu open) to open a specific menu
// (First Priority) 2. To figure out how to fix based the about and program component that are created by me already. Then, after fixed them, I will refractor them into another component that can handle all of the submenu

export default function Header() {
  const [aboutSubmenuIsOpen, aboutSubmenuSetIsOpen] = useState(false)
  const [programSubmenuIsOpen, programeSubmenuSetIsOpen] = useState(false)

  function AboutMenuButtonOnClickHandle(event) {
    aboutSubmenuSetIsOpen(!aboutSubmenuIsOpen)
    programeSubmenuSetIsOpen(false)
    event.preventDefault()
  }

  function ProgramMenuButtonOnClickHandle(event) {
    programeSubmenuSetIsOpen(!programSubmenuIsOpen)
    aboutSubmenuSetIsOpen(false)
    event.preventDefault()
  }

  return (
    <Wrapper>
      <Link to="/">
        <Logo src="/images/logos/sangletech-logo.png" />
      </Link>
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) => {
          if (item.link === "/sang-le-la-ai") {
            return (
              <MenuButton
                item={item}
                key={index}
                onClick={event => AboutMenuButtonOnClickHandle(event)}
              />
            )
          } else if (item.link === "/chuong-trinh") {
            return (
              <MenuButton
                item={item}
                key={index}
                onClick={event => ProgramMenuButtonOnClickHandle(event)}
              />
            )
          } else {
            return <MenuButton item={item} key={index} />
          }
        })}
      </MenuWrapper>
      <AboutSubHeader aboutSubmenuIsOpen={aboutSubmenuIsOpen} />
      <ProgramSubHeader programSubmenuIsOpen={programSubmenuIsOpen} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* Position */
  position: absolute;
  top: 30px;
  display: grid;
  grid-template-columns: 64px auto;
  width: 100%;
  padding: 0 30px;
  justify-content: space-between;
  align-items: center;
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${props => props.count}, auto);
`

const Logo = styled.img`
  width: 64px;
`
