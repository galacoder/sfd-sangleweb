import React from "react"
import styled from "styled-components"
import PlayButton from "../misc/PlayButton"

export default function VideoCard(props) {
  return (
    <Wrapper onClick={props.onClickPlayHandle}>
      <Background backgroundColor={props.backgroundColor}>
        <Image
          src={props.src || "/images/illustration/warriorx0-illustration.svg"}
        />
        <PlayButton
          bigPlayIcon="true"
          onClickPlayHandle={props.onClickPlayHandle}
        />
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
  min-width: 360px;
  height: 480px;
  background: ${props =>
    props.backgroundColor || "linear-gradient(to right, #11998e, #38ef7d);"};
  background: -webkit-linear-gradient(to right, #11998e, #38ef7d);
  border-radius: 20px;
  padding: 20px;

  display: grid;
  grid-template-columns: auto;
  gap: 30px;
  justify-content: center;
  align-items: center;
  align-content: center;
  justify-items: center;
  text-align: center;
`

// const ContentWrapper = styled.div`
//   display: grid;
//   grid-template-columns: auto;
//   gap: 20px;
//   justify-content: center;
//   align-items: center;
//   align-content: center;
//   justify-items: center;
//   text-align: center;
// `
const Image = styled.img`
  width: 100%;
`
