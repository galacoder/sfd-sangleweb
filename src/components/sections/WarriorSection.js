import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import ButtonIcon from "../buttons/ButtonIcon"
import { Caption, Caption2, H2, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import VideoCard from "../card/VideoCard"
import LightBox from "../../components/misc/LightBox"
import SectionPaddingBlock from "../layout/SectionPaddingBlock"

//TODO Needa think how to have a custom Youtube player with overlay image here: https://www.npmjs.com/package/react-image-video-lightbox

//TODO Image slider can check here: https://codepen.io/suez/pen/OjGQza

// TODO Fix the background issue when it turns to dark mode

export default function WarriorSection() {
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

  function urlHandler() {
    const url = "https://youtu.be/ff98l3P66i8"
    return url
  }
  return (
    <Wrapper>
      <SectionPaddingBlock />
      <LightBox
        isOpen={isOpen}
        isPlay={isPlay}
        onClickCloseHandle={onClickCloseHandle}
        url={urlHandler()} //change the URL in the function
      />
      <ContentWrapper>
        <TextWrapper>
          <HeaderWrapper>
            <Title>Warrior X.0</Title>
            <Subtitle></Subtitle>
          </HeaderWrapper>
          <Description>
            Trong Chiến Binh X.0, bạn sẽ tìm thấy các chiến lược và phương pháp
            mà Sang Lê đã sử dụng trong suốt hành trình lột xác bản thân để từ
            một học sinh nghiện game trở thành CEO như ngày hôm nay. Không quan
            trọng bạn đang ở vị trí nào trong cuộc sống. Quan trọng là bạn có
            dám thử chơi một trò chơi lớn hơn trong cuộc đời và khám phá những
            gì còn ẩn sâu bên trong chính con người mình hay không!
          </Description>
          <Link to="/">
            <ButtonIcon title="Tìm Hiểu Thêm" subtitle="Còn chần chờ gì nữa?" />
          </Link>
        </TextWrapper>
        <VideoWrapper>
          <VideoCard
            onClickPlayHandle={onClickPlayHandle}
            onClick={() => urlHandler}
          />

          <VideoTitle>
            Vừa tham gia chương trình Chiến Binh X.0 vừa có cơ hội nhận được
            iPhone 12 HOT nhất hiện nay! Bạn nghĩ sao?
          </VideoTitle>
        </VideoWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  height: 868px;
  width: 100%;
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 100px;
  gap: 88px;
`
const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 30px;
  width: 400px;
`

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 10px;
`

const Title = styled(H2)`
  text-transform: capitalize;
  color: ${themes.light.text1};
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
  }
`
const Subtitle = styled(Caption)`
  color: gray;
`
const Description = styled(MediumText)`
  line-height: 30px;
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
  }
`
const VideoWrapper = styled.div`
  width: 500px;
  display: grid;
  grid-template-columns: auto;
  gap: 30px;
  justify-items: center;
`
// const VideoFrame = styled.div`
//   width: 500px;
// `
const VideoTitle = styled(Caption2)`
  text-align: center;
  max-width: 368px;
`
