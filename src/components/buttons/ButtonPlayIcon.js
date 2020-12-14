import React from "react"
import styled from "styled-components"
import { Caption2, SmallText } from "../styles/TextStyles"
import PlayButton from "../misc/PlayButton"

export default function ButtonPlayIcon(props) {
  const { title, iconSrc, subtitle } = props
  return (
    <Wrapper onClick={props.onClickPlayHandle}>
      <IconWrapper>
        <IconRing src={iconSrc || "/images/icons/icon-ring.svg"} />
        <PlayButton onClickPlayHandle={props.onClickPlayHandle} />
      </IconWrapper>
      <TextWrapper>
        <Title>{title || "This is button with icon"}</Title>
        <Subtitle>{subtitle || "subtitle"}</Subtitle>
      </TextWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 12px;
  width: 280px;

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
  cursor: pointer;

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
const Subtitle = styled(SmallText)``
const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
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
  * {
    :nth-child(2) {
      transform: scale(0.6);
    }
  }
`
const IconRing = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;

  ${Wrapper} :hover & {
    transform: rotate(30deg) scale(1.2) translate(1px, 1px);
  }
`
const IconPlayWrapper = styled.div`
  width: 29px;
  height: 29px;
`
