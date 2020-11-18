import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Caption } from "../styles/TextStyles"
import { menuData } from "../../data/menuData"

export default function Header() {
  return (
    <Wrapper>
      <Link to="/">
        <Logo src="/images/logos/sangletech-logo.png" />
      </Link>

      <MenuWrapper>
        {menuData.map((item, index) => (
          <Link to={item.link} key={index}>
            <MenuItem>
              <img src={item.icon} alt={item.title} />
              {item.title}
            </MenuItem>
          </Link>
        ))}
      </MenuWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
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
  grid-template-columns: repeat(6, auto);
`

const MenuItem = styled(Caption)`
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: 24px auto;
  gap: 10px;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  transition: 0.5s ease-in;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`

const Logo = styled.img`
  width: 64px;
`
