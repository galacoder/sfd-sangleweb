import React from "react"
import styled from "styled-components"
import { Caption2, SmallText } from "../styles/TextStyles"

export default function ButtonIcon(props) {
  const { title, iconSrc, subtitle } = props
  return (
    <Wrapper>
      <Icon src={"/sfd-sangleweb/static/images/icons/book.svg"} />
      <Title>{title || "This is button with icon"}</Title>
      <Subtitle>{subtitle || "subtitle"}</Subtitle>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 12px;
  width: 280px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2);
  backdrop-filter: blur(30px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
`
const Title = styled(Caption2)``
const Subtitle = styled(SmallText)``
const Icon = styled.img``
