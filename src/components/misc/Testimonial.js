import React from "react"
import styled from "styled-components"
import { BodyMain, SmallText, SmallText2 } from "../styles/TextStyles"

export default function Testimonial(props) {
  return (
    <Wrapper>
      <Avatar src={props.avatar || "images/avatars/chris.png"} />
      <Name>{props.name || "Name"} </Name>
      <Position>{props.position || "Position"}</Position>
      <Comment>{props.comment || "Comment"}</Comment>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  padding: 30px;
  gap: 8px;
  width: 340px;
  height: 251px;
  background: rgba(15, 14, 71, 0.5);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
`
const Avatar = styled.img`
  width: 42px;
  height: 42px;
  left: 30px;
  top: 30px;
`
const Name = styled(BodyMain)`
  color: white;
`
const Position = styled(SmallText2)`
  text-transform: uppercase;
  color: #ff9595;
`
const Comment = styled(SmallText)`
  color: white;
`
