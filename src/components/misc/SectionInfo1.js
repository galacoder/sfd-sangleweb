import React from "react"
import styled from "styled-components"
import { Caption2, H2, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"

export default function SectionInfo1(props) {
  return (
    <Wrapper>
      <Caption textColor={props.textColor}>
        {props.caption || "Caption"}
      </Caption>
      <Title textColor={props.textColor}>{props.title || "Title"}</Title>
      <Description textColor={props.textColor}>
        {props.description || "Description"}
      </Description>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 460px;
  justify-content: center;
  justify-items: center;
  text-align: center;
  gap: 8px;
`
const Caption = styled(Caption2)`
  color: ${props => props.textColor || "white"};
`
const Title = styled(H2)`
  color: ${props => props.textColor || "white"};
`
const Description = styled(MediumText)`
  color: ${props => props.textColor || "white"};
`
