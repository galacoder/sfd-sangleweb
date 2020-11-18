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
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  background: url("/images/waves/certificate-lines.svg"),
    linear-gradient(180deg, #343563 0%, #4926ad 100%);
  margin: 0 auto;
  max-width: 100%;
  padding: 250px 100px;
  overflow: hidden;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 360px auto;
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
