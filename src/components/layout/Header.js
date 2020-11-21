import React, { useState } from "react"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"
import { Link } from "gatsby"
import AboutSubHeader from "../tooltips/AboutSubHeader"
import ProgramSubHeader from "../tooltips/ProgramSubHeader"

// TODO The submenus are working but pretty complicated right now. I needa think of a way to refractor the code. Probably, think of creating a menutooltip template and somehow it can have a props to switch between the submenu.

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
