import React from "react"
import styled from "styled-components"

export default function Certifcates() {
  return (
    <Wrapper>
      <img src="images/illustration/certifcate01.svg" />
      <img src="images/illustration/certifcate02.svg" />
      <img src="images/illustration/certifcate03.svg" />
      <img src="images/illustration/certifcate04.svg" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;

  * {
    box-sizing: border-box;
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    :hover {
      transform: translateX(30px) translateY(60px);
      filter: brightness(150%) saturate(120%);

      & :nth-child(1) {
        transition-delay: 0.1s;
      }
      & :nth-child(2) {
        transition-delay: 0.2s;
      }
      & :nth-child(2) {
        transition-delay: 0.3s;
      }
      & :nth-child(2) {
        transition-delay: 0.4s;
      }
    }

    :nth-child(1) {
      position: absolute;
      width: 335px;
      height: 220px;
      z-index: 4;
    }
    :nth-child(2) {
      position: absolute;
      width: 315px;
      height: 220px;
      left: 100px;
      top: 38px;
      z-index: 3;
    }
    :nth-child(3) {
      position: absolute;
      width: 295px;
      height: 220px;
      left: 200px;
      top: 60px;
      z-index: 2;
    }
    :nth-child(4) {
      position: absolute;
      width: 268.18px;
      height: 200px;
      left: 300px;
      top: 100px;
      z-index: 1;
    }
  }
`
