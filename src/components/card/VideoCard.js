import React from "react"
import styled from "styled-components"
import { Caption2, H3, SmallText } from "../styles/TextStyles"

export default function VideoCard(props) {
  return (
    <Wrapper>
      <Background backgroundColor={props.backgroundColor}>
        <Image
          src={props.src || "/images/illustration/warriorx0-illustration.svg"}
        />
        <PlayIconWrapper>
          <PlayIcon src="/images/icons/play.svg" />
          <PlayRing src="/images/icons/progress.svg" />
        </PlayIconWrapper>
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
const PlayIconWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-items: center;

  width: 100px;
  height: 100px;
  background: linear-gradient(
    180deg,
    rgba(24, 32, 79, 0.4) 0%,
    rgba(24, 32, 79, 0.25) 100%
  );
  border: 0.385106px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 15.4043px 30.8085px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(30.8085px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 80px;

  /*Animation */
  :hover {
    *,
    & {
      transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    transform: scale(1.1);
  }
`
const PlayIcon = styled.img`
  position: absolute;
  transform: scale(0.8);
`
const PlayRing = styled.img`
  position: absolute;
  left: 33px;
  bottom: 28px;

  transform: scale(1.3);
  ${PlayIconWrapper}:hover & {
    filter: hue-rotate(100deg) brightness(150%);
  }
`
