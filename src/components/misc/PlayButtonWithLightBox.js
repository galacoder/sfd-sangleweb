import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import ReactPlayer from "react-player"
import PropTypes from "prop-types"

export default function PlayButtonWithLightBox(props) {
  const [isPlay, setIsPlay] = useState(false)
  const [isOpen, setIsOpen] = useState(0)

  function onClickPlayHandle(event) {
    setIsOpen(1)
    setIsPlay(true)
    event.preventDefault()
  }

  function onCLickCloseHandle(event) {
    setIsPlay(false)
    setIsOpen(0)
    event.preventDefault()
  }
  return (
    <Wrapper>
      <PlayIconWrapper
        // if bigSize == true, button will auto change to be bigger
        onClick={event => {
          onClickPlayHandle(event)
        }}
        bigPlayIcon={props.bigPlayIcon}
      >
        <PlayIcon
          src="/images/icons/play.svg"
          bigPlayIcon={props.bigPlayIcon}
        />
        <PlayRing
          src="/images/icons/progress.svg"
          bigPlayIcon={props.bigPlayIcon}
        />
      </PlayIconWrapper>
      <LightBox isOpen={isOpen}>
        <Modal>
          <ReactPlayer
            width="100%"
            height="100%"
            url={props.url || "https://youtu.be/ocKYZdShDgA"}
            playing={isPlay}
          />
        </Modal>
        <CloseButton
          src="/images/icons/x.svg"
          onClick={event => onCLickCloseHandle(event)}
        />
      </LightBox>
    </Wrapper>
  )
}

//Play Button Size Theme
const PlayButtonSize = {
  small: {
    buttonWidth: `80px`,
    buttonHeight: `80px`,
    ringScale: `1.0`,
    ringLeft: `20px`,
    ringBottom: `16px`,
    iconScale: `0.6`,
  },
  big: {
    buttonWidth: `100px`,
    buttonHeight: `100px`,
    ringScale: `1.3`,
    ringLeft: `33px`,
    ringBottom: `28px`,
    iconScale: `0.8`,
  },
}

const Wrapper = styled.div`
  /* Position */
  width: 100%;
  height: 100%;
  /* Box-model */
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-items: center;
  z-index: 100;
  top: 0px;
  left: 0px;
`

const LightBox = styled.div`
  /* Position */
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;

  /* Box-model */
  display: flex;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  /* Visual */
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px) saturate(100%);
  z-index: 99;
  opacity: ${props => (props.isOpen ? "1" : "0")};
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  /* Animation */
  transition: 0.3s ease-in-out;
  transform: ${props =>
    props.isOpen
      ? "skewY(0) rotate(0) translateY(0)"
      : "skewY(-5deg) rotate(5deg) translateY(-30px)"};
`

const Modal = styled.div`
  /* Position */
  position: relative;

  max-width: 960px;
  height: 600px;
  width: 100%;
  padding: 60px;

  /* Box-model */
  display: grid;
  grid-template-columns: auto;
  gap: 20px;
  justify-items: center;
  align-items: center;

  /* Visual */
  background: rgba(50, 61, 109, 0.5);
  box-shadow: rgba(255, 255, 255, 0.3) 0px 0px 0px 0.5px inset;
  backdrop-filter: blur(40px);
  border-radius: 20px;
  animation: 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0s 1 normal forwards running;
`
const CloseButton = styled.img`
  /* Position */
  padding: 8px;

  width: 36px;
  height: 36px;

  /* Box-model */
  position: absolute;
  right: 220px;
  top: 60px;

  /* Visual */
  -webkit-box-pack: center;
  place-content: center;
  background: linear-gradient(
    360deg,
    rgba(99, 106, 150, 0.4) 0%,
    rgba(182, 186, 214, 0.5) 100%
  );
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 40px,
    rgba(255, 255, 255, 0.3) 0px 0px 0px 0.5px inset;
  backdrop-filter: blur(40px);
  border-radius: 30px;
  cursor: pointer;
`

const PlayIconWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-items: center;

  width: ${props =>
    props.bigPlayIcon
      ? PlayButtonSize.big.buttonWidth
      : PlayButtonSize.small.buttonWidth};
  height: ${props =>
    props.bigPlayIcon
      ? PlayButtonSize.big.buttonHeight
      : PlayButtonSize.small.buttonHeight};
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
  cursor: pointer;
`
const PlayIcon = styled.img`
  position: absolute;
  transform: scale(
    ${props =>
      props.bigPlayIcon
        ? PlayButtonSize.big.iconScale
        : PlayButtonSize.small.iconScale}
  );
`
const PlayRing = styled.img`
  position: absolute;
  left: ${props =>
    props.bigPlayIcon
      ? PlayButtonSize.big.ringLeft
      : PlayButtonSize.small.ringLeft};
  bottom: ${props =>
    props.bigPlayIcon
      ? PlayButtonSize.big.ringBottom
      : PlayButtonSize.small.ringBottom};

  transform: scale(
    ${props =>
      props.bigPlayIcon
        ? PlayButtonSize.big.ringScale
        : PlayButtonSize.small.ringScale}
  );
  ${PlayIconWrapper}:hover & {
    filter: hue-rotate(100deg) brightness(150%);
  }
`
