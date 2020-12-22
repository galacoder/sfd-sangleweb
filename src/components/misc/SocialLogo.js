import React from "react"
import styled from "styled-components"
import { socialAccountData } from "../../data/socialAccountData"
export default function SocialLogo() {
  return (
    <Wrapper count={socialAccountData.length}>
      {socialAccountData.map((item, index) => {
        return <Logo src={item.icon} key={index} alt={item.platform} />
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
`
const Logo = styled.img``
