import React from "react"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import ButtonIcon from "../buttons/ButtonIcon"
import { Link } from "gatsby"
import WaveBackground from "../backgrounds/WaveBackground"

function HeroSection() {
  return (
    <Wrapper>
      <WaveBackground />
      <HeroWrapper>
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
      </HeroWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div``

const HeroWrapper = styled.div`
  padding: 100px 100px;
  display: grid;
  grid-template-columns: 1fr auto;
  justify-items: center;
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
const ContentWrapper = styled.div``

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
