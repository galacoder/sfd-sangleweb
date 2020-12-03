import React from "react"
import styled from "styled-components"
import { Caption2, H3, SmallText } from "../styles/TextStyles"

export default function MiniCard(props) {
  return (
    <Wrapper>
      <Background backgroundColor={props.backgroundColor}>
        <ContentWrapper>
          <Image src={props.src} />
          <Title> {props.miniCardTitle}</Title>
          <Caption>{props.miniCardCaption}</Caption>
          <Description>{props.miniCardDescription}</Description>
        </ContentWrapper>
      </Background>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* Animation */
  transition: 3s cubic-bezier(0.075, 0.82, 0.165, 1);
  border-radius: 20px;

  :hover {
    transform: scale(1.1);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  }
`
const Background = styled.div`
  min-width: 200px;
  height: 360px;
  background: ${props =>
    props.backgroundColor ||
    "linear-gradient(218.31deg, #007aff 0%, #50a4ff 100%)"};
  border-radius: 20px;
  padding: 20px;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 20px;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
`
const Image = styled.img`
  width: 200px;
  height: 150px;
`
const Title = styled(H3)`
  color: #fff;
  top: 160px;
`
const Caption = styled(Caption2)`
  color: #fff;
  top: 199px;
`
const Description = styled(SmallText)`
  color: #fff;
  top: 228px;
`
