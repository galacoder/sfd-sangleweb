import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import ButtonIcon from "../buttons/ButtonIcon"
import { BodyIntro, BodyMain, Caption, H1, H2, H3 } from "../styles/TextStyles"

//TODO Needa think how to have a custom Youtube player with overlay image here: https://www.npmjs.com/package/react-image-video-lightbox

//TODO Image slider can check here: https://codepen.io/suez/pen/OjGQza

// TODO Fix the background issue when it turns to dark mode

export default function WarriorSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>Thử một lần chơi lớn, xem ai có trầm trồ?</Title>
          <Subtitle>
            Vừa tham gia chương trình Chiến Binh X.0 vừa có cơ hội nhận được
            iPhone 12 HOT nhất hiện nay! Bạn nghĩ sao?
          </Subtitle>
          <Description>
            Trong Chiến Binh X.0, bạn sẽ tìm thấy các chiến lược và phương pháp
            mà Sang Lê đã sử dụng trong suốt hành trình lột xác bản thân để từ
            một học sinh nghiện game trở thành CEO như ngày hôm nay.
            <span>
              Không quan trọng bạn đang ở vị trí nào trong cuộc sống. Quan trọng
              là bạn có dám thử chơi một trò chơi lớn hơn trong cuộc đời và khám
              phá những gì còn ẩn sâu bên trong chính con người mình hay không!
            </span>
          </Description>
          <Link to="/">
            <ButtonIcon />
          </Link>
        </TextWrapper>
        <VideoWrapper>
          <VideoFrame>
            <iframe
              src="https://www.youtube.com/embed/E7wJTI-1dvQ"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
              width="100%"
              height="300px"
            />
          </VideoFrame>
          <VideoTitle>Chiến Binh X.0</VideoTitle>
        </VideoWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  top: 450px;
  margin: 100px;
  height: 800px;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
`
const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 30px;
  width: 400px;
`
const Title = styled(H2)`
  text-transform: capitalize;
`
const Subtitle = styled(Caption)`
  opacity: 0.7;
`
const Description = styled(BodyMain)``
const VideoWrapper = styled.div`
  width: 500px;
  display: grid;
  grid-template-columns: auto;
  gap: 30px;
  justify-items: center;
`
const VideoFrame = styled.div`
  width: 500px;
`
const VideoTitle = styled(H3)`
  text-shadow: 5px 8px 10px black;
`
