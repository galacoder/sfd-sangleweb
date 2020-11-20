import React, { useState } from "react"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"
import { Link } from "gatsby"
import AboutSubHeader from "../tooltips/AboutSubHeader"
import ProgramSubHeader from "../tooltips/ProgramSubHeader"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  function MenuButtonOnClickHandle(event) {
    setIsOpen(!isOpen)
    event.preventDefault()
    console.log(event)
  }

  return (
    <Wrapper>
      <Link to="/">
        <Logo src="/images/logos/sangletech-logo.png" />
      </Link>
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) =>
          item.link === "/sang-le-la-ai" || "/chuong-trinh" ? (
            <MenuButton
              item={item}
              key={index}
              onClick={event => MenuButtonOnClickHandle(event)}
            />
          ) : (
            <MenuButton item={item} key={index} />
          )
        )}
      </MenuWrapper>
      <AboutSubHeader isOpen={isOpen} />
      <ProgramSubHeader isOpen={isOpen} />
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
