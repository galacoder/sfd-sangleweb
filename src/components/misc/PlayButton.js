import React from "react"
import styled from "styled-components"
import ReactPlayer from "react-player"

export default function PlayButton(props) {
  return (
    <PlayIconWrapper
      // if bigSize == true, button will auto change to be bigger
      onClick={props.onClickPlayHandle}
      bigPlayIcon={props.bigPlayIcon}
    >
      <PlayIcon src="/images/icons/play.svg" bigPlayIcon={props.bigPlayIcon} />
      <PlayRing
        src="/images/icons/progress.svg"
        bigPlayIcon={props.bigPlayIcon}
      />
    </PlayIconWrapper>
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
