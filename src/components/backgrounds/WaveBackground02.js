import React from "react"
import styled from "styled-components"

export default function WaveBackground02() {
  return (
    <Wrapper>
      <Circle01 />
      <Circle02 />
      <Background src="/images/waves/courses-wave1-light.svg" />
      <Background03 src="/images/animations/wavelines-1.svg" />
      <Background02 src="/images/waves/hero-wave3.svg" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  @media (max-width: 450px) {
    width: 1676px;
    height: 500.47px;
    left: 0px;
  }
`

const Background = styled.img`
  width: 100%;
  position: absolute;

  z-index: -1;
`

const Background03 = styled.img`
  width: 100%;
  position: absolute;
  top: 250px;

  @media (max-width: 450px) {
    display: hidden;
  }
`

const Circle01 = styled.div`
  width: 350px;
  height: 350px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;

  position: absolute;
  left: 350px;
  top: 350px;

  background: linear-gradient(
    180deg,
    rgba(47, 184, 255, 0.42) 31.77%,
    #9eecd9 100%
  );
  mix-blend-mode: hard-light;
`

const Circle02 = styled.div`
  width: 350px;
  height: 350px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;

  position: absolute;
  left: 150px;
  top: 350px;

  background: linear-gradient(
    180deg,
    rgba(186, 117, 255, 0.49) 26.56%,
    #3913b8 100%
  );
  mix-blend-mode: hard-light;
`
const Background02 = styled.img`
  width: 100%;
  position: absolute;
  top: 450px;

  @media (max-width: 450px) {
    visibility: hidden;
    /* opacity: 0; */
  }
`
