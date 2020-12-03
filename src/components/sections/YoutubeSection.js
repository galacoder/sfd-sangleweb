import React from "react"
import styled from "styled-components"
import WaveBackground3 from "../backgrounds/WaveBackground3"
import {
  BodyMain,
  Caption2,
  H2,
  MediumText,
  SmallText,
  SmallText2,
} from "../styles/TextStyles"

export default function YoutubeSection() {
  return (
    <Wrapper>
      <WaveBackground3 style={{ paddingTop: "100px" }} />
      <TestimonialWrapper>
        <Testimonial>
          <Avatar src="images/avatars/chris.png" />
          <Name>Pablo Stanley </Name>
          <Position>DESIGNER AT BLUSH</Position>
          <Comment>
            Meng To's book totally changed my design workflow. It even inspired
            me to start design workshops and YouTube tutorials.
          </Comment>
        </Testimonial>
        <Testimonial>
          <Avatar src="images/avatars/chris.png" />
          <Name>Pablo Stanley </Name>
          <Position>DESIGNER AT BLUSH</Position>
          <Comment>
            Meng To's book totally changed my design workflow. It even inspired
            me to start design workshops and YouTube tutorials.
          </Comment>
        </Testimonial>

        <InfoWrapper>
          <Caption>Trusted by teams</Caption>
          <Title>75,000 people</Title>
          <Description>
            Many companies look for designers who code and developers who
            design. They use our courses an example to train their new hires.
          </Description>
        </InfoWrapper>
      </TestimonialWrapper>
      <FeaturedCustomerLogos>
        <Logo src="images/companies/airbnb.svg" />
        <Logo src="images/companies/airbnb.svg" />
        <Logo src="images/companies/airbnb.svg" />
        <Logo src="images/companies/airbnb.svg" />
        <Logo src="images/companies/airbnb.svg" />
        <Logo src="images/companies/airbnb.svg" />
      </FeaturedCustomerLogos>
      <YoutubeWrapper>
        <YSCaption>who’s behind</YSCaption>
        <YSTitle>Meet the instructors</YSTitle>
        <YSDescription>
          We all try to be consistent with our way of teaching step-by-step,
          providing source files and prioritizing design in our courses.
        </YSDescription>
        <YoutubeVideoWrapper>
          <YoutubeVideo src="images/background/background01.jpeg" />
          <ThumbnailWrapper>
            <Thumbnail />
            <PlayIconWrapper>
              <PlayIcon />
              <PlayRing />
            </PlayIconWrapper>
          </ThumbnailWrapper>
          <YTitle>YTitle</YTitle>
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

const TestimonialWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  padding: 100px;
  align-items: center;
`

//Testimonial Component
const Testimonial = styled.div`
  display: grid;
  grid-template-columns: auto;
  padding: 30px;
  gap: 8px;
  width: 340px;
  height: 251px;
  background: rgba(15, 14, 71, 0.5);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
`
const Avatar = styled.img`
  width: 42px;
  height: 42px;
  left: 30px;
  top: 30px;
`
const Name = styled(BodyMain)`
  color: white;
`
const Position = styled(SmallText2)`
  text-transform: uppercase;
  color: #ff9595;
`
const Comment = styled(SmallText)`
  color: white;
`

//InfoWrapper
const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 8px;
`
const Caption = styled(Caption2)``
const Title = styled(H2)``
const Description = styled(MediumText)``

//Customer Logo Component
const FeaturedCustomerLogos = styled.div``
const Logo = styled.img``

//Youtube Full Section Component
const YoutubeWrapper = styled.div`
  display: grid;
  grid-template-columns: 460px;
  justify-content: center;
  justify-items: center;
  text-align: center;
  gap: 8px;
`
const YSCaption = styled(Caption2)``
const YSTitle = styled(H2)``
const YSDescription = styled(MediumText)``

//Youtube Component

//Play Icon
const PlayIconWrapper = styled.div``
const PlayIcon = styled.img``
const PlayRing = styled.img``

//Youtube Other Entities
const YoutubeVideoWrapper = styled.div`
  width: 366px;
  height: 268px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
`
const YoutubeVideo = styled.img`
  width: 330px;
  height: 198px;
  border-radius: 25.9669px 25.9669px 0px 0px;
  padding-top: 10px;
`
const ThumbnailWrapper = styled.div``
const Thumbnail = styled.img``
const YTitle = styled.p``
