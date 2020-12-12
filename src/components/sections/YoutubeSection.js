import React, { useState } from "react"
import styled from "styled-components"
import WaveBackground3 from "../backgrounds/WaveBackground3"
import { Caption2, H2, MediumText } from "../styles/TextStyles"

import MiniButtonIcon from "../buttons/MiniButtonIcon"
import SectionInfo1 from "../misc/SectionInfo1"
import Testimonial from "../misc/Testimonial"
import FeaturedLogos from "../misc/FeaturedLogos"
import YoutubeVideo from "../misc/YoutubeVideo"
import LightBox from "../../components/misc/LightBox"

export default function YoutubeSection() {
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
  return (
    <Wrapper>
      <LightBox
        isOpen={isOpen}
        isPlay={isPlay}
        onClickCloseHandle={onClickCloseHandle}
        url="" //TODO: Think of using onClickUrlInput handler and UseRef to feed the new url everytime click the play button. tough call
      />
      <WaveBackground3 />
      <TestimonialWrapper>
        <Testimonial avatar="" name="" position="" comment="" />
        <Testimonial avatar="" name="" position="" comment="" />

        <InfoWrapper>
          <Caption>Trusted by teams</Caption>
          <Title>75,000 people</Title>
          <Description>
            Many companies look for designers who code and developers who
            design. They use our courses an example to train their new hires.
          </Description>
        </InfoWrapper>
      </TestimonialWrapper>
      <FeaturedLogos />
      <SectionInfo1 caption="" title="" description="" />
      <YoutubeVideosWrapper>
        <YoutubeVideo onClickPlayHandle={onClickPlayHandle} />
        <YoutubeVideo onClickPlayHandle={onClickPlayHandle} url="" />
        <YoutubeVideo onClickPlayHandle={onClickPlayHandle} url="" />
      </YoutubeVideosWrapper>
      <MiniButtonIcon title="Browse More" />
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
  justify-items: center;
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

const YoutubeVideosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 60px;
  justify-items: center;
  align-items: center;
`
