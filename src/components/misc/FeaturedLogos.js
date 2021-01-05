import React from "react"
import styled from "styled-components"
import { logoData } from "../../data/logoData"
export default function FeaturedLogos() {
  return (
    <Wrapper count={logoData.length}>
      {logoData.map((item, index) => {
        return <Logo src={item.logoSrc} key={index} />
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.count}, 1fr);
  margin: 60px;
  gap: 30px;

  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;

  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
    margin: 0px;
    width: 350px;
  }
`
const Logo = styled.img``
