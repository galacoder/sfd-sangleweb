import React from "react"
import styled from "styled-components"

export default function YoutubeSection() {
  return (
    <Wrapper>
      <TestimonialWrapper>
        <Testimonial>
          <Avatar />
          <Name>Just changed the Name </Name>
          <Position>Position</Position>
          <Comment>Comment</Comment>
        </Testimonial>

        <InfoWrapper>
          <Caption>Caption</Caption>
          <Title>Title</Title>
          <Description>Description</Description>
        </InfoWrapper>
      </TestimonialWrapper>
      <FeaturedCustomerLogos>
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
      </FeaturedCustomerLogos>
      <YoutubeWrapper>
        <YSCaption>Caption</YSCaption>
        <YSTitle>YSTitle</YSTitle>
        <YSDescription>Description</YSDescription>
        <YoutubeVideoWrapper>
          <YoutubeVideo>
            <ThumbnailWrapper>
              <Thumbnail />
              <PlayIconWrapper>
                <PlayIcon />
                <PlayRing />
              </PlayIconWrapper>
            </ThumbnailWrapper>
            <YTitle>YTitle</YTitle>
          </YoutubeVideo>
        </YoutubeVideoWrapper>
      </YoutubeWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  height: 600px;
  top: 2000px;
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-content: center;
`

const TestimonialWrapper = styled.div``

//Testimonial Component
const Testimonial = styled.div``
const Avatar = styled.img``
const Name = styled.p``
const Position = styled.p``
const Comment = styled.p``

//InfoWrapper
const InfoWrapper = styled.div``
const Caption = styled.p``
const Title = styled.p``
const Description = styled.p``

//Customer Logo Component
const FeaturedCustomerLogos = styled.div``
const Logo = styled.img``

//Youtube Full Section Component
const YoutubeWrapper = styled.div``
const YSCaption = styled.p``
const YSTitle = styled.p``
const YSDescription = styled.p``

//Youtube Component

//Play Icon
const PlayIconWrapper = styled.div``
const PlayIcon = styled.img``
const PlayRing = styled.img``

//Youtube Other Entities
const YoutubeVideoWrapper = styled.div``
const YoutubeVideo = styled.div``
const ThumbnailWrapper = styled.div``
const Thumbnail = styled.img``
const YTitle = styled.p``
