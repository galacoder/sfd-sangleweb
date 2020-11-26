import React from "react"
import styled from "styled-components"
import WaveBackground02 from "../backgrounds/WaveBackground02"
import { Caption2, H2, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"

export default function BusinessSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Caption>7 Tuần chất như nước cất</Caption>
          <Title>Khóa Học Kinh Doanh 4.0</Title>
          <Description>
            Sau hơn 10 năm hoạt động kinh doanh ở nhiều lĩnh vực khác nhau, tổn
            thất hàng trăm ngàn đô la và nhiều đêm mất ngủ, Sang Lê đã học được
            vô số bài học đắt giá để có thể giúp bạn XÂY DỰNG ƯỚC MƠ KHỞI
            NGHIỆP.
          </Description>
        </TextWrapper>
        <Certificates>
          <Logo01 src="images/companies/airbnb.svg" />
          <Logo01 src="images/companies/airbnb.svg" />
          <Logo01 src="images/companies/airbnb.svg" />
          <Logo01 src="images/companies/airbnb.svg" />
          <Logo01 src="images/companies/airbnb.svg" />
        </Certificates>
      </ContentWrapper>
      <WaveBackground02 />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  top: 600px;
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
const Certificates = styled.div``

const Logo01 = styled.img`
  transform: scale(0.8);
`
