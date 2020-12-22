import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import ButtonPlayIcon from "../buttons/ButtonPlayIcon"
import { Link } from "gatsby"
import WaveBackground from "../backgrounds/WaveBackground"
import LightBox from "../../components/misc/LightBox"
import SectionPaddingBlock from "../layout/SectionPaddingBlock"

function HeroSection() {
  const [isPlay, setIsPlay] = useState(false)
  const [isOpen, setIsOpen] = useState(0)

  function onClickPlayHandle(event) {
    setIsOpen(1)
    setIsPlay(true)
    event.preventDefault()
  }

  function onClickCloseHandle(event) {
    setIsPlay(false)
    setIsOpen(0)
    event.preventDefault()
  }

  function urlHandler() {
    const url = "https://youtu.be/ff98l3P66i8"
    return url
  }
  return (
    <Wrapper>
      <LightBox
        isOpen={isOpen}
        isPlay={isPlay}
        onClickCloseHandle={onClickCloseHandle}
        url={urlHandler()} //change the URL in the function
      />
      <WaveBackground />
      <HeroWrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title>VƯƠN TẦM BẢN THÂN</Title>
            <Description>BƯỚC ĐI TỰ TIN TRÊN HÀNH TRÌNH 4.0</Description>

            <ButtonPlayIcon
              title="Khoảnh khắc lột xác của đời Sang Lê"
              subtitle="Xem Ngay"
              onClickPlayHandle={onClickPlayHandle}
              onClick={() => urlHandler}
            />
          </TextWrapper>
          {/* <MockupAnimation /> */}
        </ContentWrapper>
        <ImageWrapper>
          <Image src="/images/background/sangle-futuristic-profile-photo.png" />
        </ImageWrapper>
      </HeroWrapper>
    </Wrapper>
  )
}

export default HeroSection

/* Styled Components Animation */
const animation = keyframes`
  0%{
    opacity: 0;
    transform: translateY(-10px);
    filter: blur(10px);
  }
  100%{
    opacity: 100;
    transform: translateY(0px);
    filter: blur(0px);
  }
`

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  position: relative;

  @media (max-width: 768px) {
    height: 1000px;
  }
`

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 100px 100px;

  /* iPhone Size*/
  @media (max-width: 450px) {
    grid-template-columns: auto;
    padding: 100px 0px;

    > * {
      :nth-child(2) {
        transform: scale(0.8);
        transform-origin: top;
      }
    }
  }
  /* IPAD Size*/
  @media (max-width: 768px) {
    > * {
      :nth-child(2) {
        height: 400px;
        width: 300px;
      }
    }
  }
`

const ContentWrapper = styled.div`
  width: 400px;
  @media (max-width: 450px) {
    width: 300px;
    padding-left: 10px;
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 30px;

  /*animation*/
  > * {
    /*Title*/
    :nth-child(1) {
      opacity: 0;
      animation: ${animation} 1s 0.2s forwards;
    }
    /*description*/
    :nth-child(2) {
      opacity: 0;
      animation: ${animation} 1s 0.4s forwards;
    }
    /*button*/
    :nth-child(3) {
      opacity: 0;
      animation: ${animation} 1s 0.6s forwards;
    }
  }
`

const ImageWrapper = styled.div`
  height: 500px;
  width: 400px;
  padding: 0 px;
  perspective: 5000;
  box-sizing: border-box;

  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    transform: rotateX(30deg) rotateY(20deg);
  }

  /* @media (max-width: 450px) {
    height: 300px;
    width: 200px;
    padding: 0 px;
  } */
`

const Image = styled.img`
  width: 100%;
  /*animation*/
  opacity: 0;
  animation: ${animation} 1s 0.8s forwards;
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  @media (max-width: 450px) {
    text-align: center;
  }
`
const Description = styled(MediumText)`
  color: ${themes.light.text1};
  @media (max-width: 450px) {
    text-align: center;
  }
`
