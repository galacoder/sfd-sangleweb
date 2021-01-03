import React from "react"
import styled, { keyframes } from "styled-components"
import WaveBackground02 from "../backgrounds/WaveBackground02"
import { Caption2, H2, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import FeaturedLogos from "../misc/FeaturedLogos"
import SectionPaddingBlock from "../layout/SectionPaddingBlock"

export default function PublicFeatureSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Caption>Công nghiệp 4.0</Caption>
          <Title>Phát Triển Bản Thân & Doanh Nghiệp</Title>
          <Description>
            Sang chia sẻ chiến lược và phương pháp mà bạn có thể áp dụng trong
            cuộc sống và công việc. Để bạn đạt được những ước mơ, sự giàu có,
            thành công và bản lĩnh trên hành trình 4.0.
          </Description>
        </TextWrapper>
        <FeaturedLogos />
      </ContentWrapper>
      <WaveBackground02 />
    </Wrapper>
  )
}

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
  position: relative;
  width: 100vw;
  height: 668px;
`
const ContentWrapper = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  align-items: center;
  gap: 60px;

  left: 113px;
  top: 150px;

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

  @media (max-width: 450px) {
    display: grid;
    grid-template-columns: auto;
    left: 0px;
    padding: 20px;
    top: 100px;
    gap: 20px;
  }
`
const TextWrapper = styled.div`
  display: grid;
  gap: 20px;
  z-index: 1;

  @media (max-width: 450px) {
    display: grid;
    grid-template-columns: auto;
    width: 100vw;
    padding: 30px;
    padding-left: 0px;
  }
`
const Caption = styled(Caption2)`
  color: ${themes.dark.text1};
  opacity: 0.7;
`
const Title = styled(H2)`
  color: ${themes.dark.text1};
`
const Description = styled(MediumText)`
  color: ${themes.dark.text1};
  opacity: 0.7;
`
