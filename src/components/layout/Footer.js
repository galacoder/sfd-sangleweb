import React from "react"
import styled from "styled-components"
import {
  menuData,
  aboutSubmenuData,
  programSubmenuData,
} from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"
import { SmallText } from "../styles/TextStyles"

export default function Footer() {
  return (
    <Wrapper>
      <MenuWrapper>
        {menuData.map((item, index) => {
          return <MenuButton item={item} title={item.title} key={index} />
        })}

        <CopyRight>Copywriting</CopyRight>
      </MenuWrapper>
      <BackgroundWrapper>
        <Background src="images/waves/footer-wave2.svg" />
        <Background src="images/waves/footer-wave1.svg" />
        <Background src="images/waves/footer-wave3.svg" />
        <Background src="images/waves/CircleGaps.svg" />
      </BackgroundWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  top: 6000px;
  width: 100%;
  position: absolute;
`

const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  z-index: 1;
`
const BackgroundWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  z-index: -1;
  * {
    position: absolute;
    :nth-child(2) {
      top: 80px;
      transform: scale(1.2);
    }
    :nth-child(1) {
      top: 80px;
      left: 200px;
      transform: scale(1.2);
    }
  }
`
const Background = styled.img``

const CopyRight = styled(SmallText)``
