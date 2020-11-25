import React, { useState, useEffect, useRef } from "react"
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

  function handleClickOutside(event) {
    if (
      MenuWrapperRef.current &&
      !MenuWrapperRef.current.contains(event.target)
    ) {
      console.log("Document is Click")
      aboutSubmenuSetIsOpen(false)
      programeSubmenuSetIsOpen(false)
    }
  }

  // Use Ref to define the component
  const MenuWrapperRef = useRef()

  // Click outside to close the submenu or menu tooltip
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

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
      <MenuWrapper count={menuData.length} ref={MenuWrapperRef}>
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
        <HambugerWrapper>
          <MenuButton
            item={{ title: "", icon: "/images/icons/hamburger.svg", link: "/" }}
            onClick={event => AboutMenuButtonOnClickHandle(event)}
          />
        </HambugerWrapper>
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
  gap: 20px;
  grid-template-columns: repeat(${props => props.count}, auto);

  @media (max-width: 768px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`

const HambugerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

const Logo = styled.img`
  width: 64px;
`
