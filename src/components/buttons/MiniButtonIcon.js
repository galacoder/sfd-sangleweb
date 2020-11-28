import React from "react"
import styled from "styled-components"
import { Caption2, SmallText } from "../styles/TextStyles"

export default function MiniButtonIcon(props) {
  const { title, iconSrc } = props
  return (
    <Wrapper>
      <IconWrapper>
        <IconRing src={iconSrc || "/images/icons/icon-ring.svg"} />
        <Icon src={iconSrc || "/images/icons/book.svg"} />
      </IconWrapper>
      <TextWrapper>
        <Title>{title || "This is button with icon"}</Title>
      </TextWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 12px;
  display: grid;
  grid-template-columns: 53px auto;
  gap: 10px;
  align-items: center;

  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.5),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);

  border-radius: 20px;

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);

    transform: translateY(-3px);

    *,
    & {
      transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }
`
const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`
const Title = styled(Caption2)``

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  display: grid;
  justify-content: center;
  align-content: center;

  position: relative;

  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  box-shadow: 0px 10px 20px rgba(182, 153, 255, 0.3);

  ${Wrapper}:hover & {
    filter: hue-rotate(10deg) brightness(150%);
  }
`
const IconRing = styled.img`
  position: absolute;
  top: -10px;
  left: -11px;
  width: 60px;

  ${Wrapper} :hover & {
    transform: rotate(30deg) scale(1.2) translate(1px, 1px);
  }
`
const Icon = styled.img`
  width: 29px;
  height: 29px;
`
