import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>VƯƠN TẦM BẢN THÂN</Title>
          <Description>BƯỚC ĐI TỰ TIN TRÊN HÀNH TRÌNH 4.0</Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  background: linear-gradient(180deg, #343563 0%, #4926ad 100%);
  margin: 0 auto;
  max-width: 1234px;
  padding: 200px 30px;
`
const ContentWrapper = styled.div``
const TextWrapper = styled.div`
  width: 360px;
  display: grid;
  gap: 30px;
`

const Title = styled.h1`
  font-size: 60px;
  color: white;
`
const Description = styled.p`
  font-size: 17px;
  line-height: 130%;
`
