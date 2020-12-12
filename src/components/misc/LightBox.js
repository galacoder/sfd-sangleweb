import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import ReactPlayer from "react-player"

export default function LightBox(props) {
  return (
    <LightBoxWrapper isOpen={props.isOpen}>
      <Modal>
        <ReactPlayer
          width="100%"
          height="100%"
          url={props.url || "https://youtu.be/ocKYZdShDgA"}
          playing={props.isPlay}
        />
      </Modal>
      <CloseButton
        src="/images/icons/x.svg"
        onClick={props.onClickCloseHandle}
      />
    </LightBoxWrapper>
  )
}

const LightBoxWrapper = styled.div`
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
  justify-content: center;
  /* Visual */
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px) saturate(100%);
  z-index: 10;
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
  right: 230px;
  top: 45px;
  z-index: 10;

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
