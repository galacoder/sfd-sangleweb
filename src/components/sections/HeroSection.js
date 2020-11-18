import React from "react"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import ButtonIcon from "../buttons/ButtonIcon"
import { Link } from "gatsby"
import MockupAnimation from "../animations/mockupanimations"

function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>VƯƠN TẦM BẢN THÂN</Title>
          <Description>BƯỚC ĐI TỰ TIN TRÊN HÀNH TRÌNH 4.0</Description>
          <Link to="/page-2">
            <ButtonIcon
              title="Khoảnh khắc lột xác của đời Sang Lê"
              subtitle="Xem Ngay"
            />
          </Link>
        </TextWrapper>
        {/* <MockupAnimation /> */}
      </ContentWrapper>
      <ImageWrapper>
        <Image src="/images/background/humanize-nobg.png" />
      </ImageWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  background: url("/images/waves/course-wave1.svg"),
    url("/images/waves/course-wave2.svg"), url("/images/waves/course-wave3.svg"),
    linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right 35% bottom 35%;
  background-position-y: center, bottom;
  margin: 0 auto;
  max-width: 100%;
  padding: 100px 100px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: center;
  align-items: center;
`

const ImageWrapper = styled.div`
  height: 600px;
  perspective: 5000;

  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    transform: rotateX(30deg) rotateY(20deg);
  }
`

const Image = styled.img`
  width: 500px;
`
const ContentWrapper = styled.div`
  /* display: grid; */
  /* grid-template-columns: 360px auto; */
`

const TextWrapper = styled.div`
  width: 360px;
  display: grid;
  gap: 30px;
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
`
const Description = styled(MediumText)`
  color: ${themes.dark.text1};
`
