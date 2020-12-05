import React from "react"
import styled from "styled-components"

import { Caption } from "../styles/TextStyles"
import { Link } from "gatsby"
export default function YoutubeVideo(props) {
  return (
    <Wrapper>
      <Link to={props.link || "/"}>
        <ContentWrapper>
          <ThumbnailWrapper>
            <Thumbnail
              src={props.thumbnailSrc || "images/background/background01.jpeg"}
            />

            <PlayIconWrapper>
              <PlayIcon src="/images/icons/play.svg" />
              <PlayRing src="/images/icons/progress.svg" />
            </PlayIconWrapper>
          </ThumbnailWrapper>
          <Title>
            {props.title ||
              "BẠN đang gặp VẤN ĐỀ làm sao CHẠY QUẢNG CÁO ONLINE HIỆU QUẢ?"}
          </Title>
        </ContentWrapper>
      </Link>
    </Wrapper>
  )
}

//Youtube Component

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-items: center;
  gap: 10px;

  width: 366px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  margin: 20px;
  gap: 13px;
`

const ThumbnailWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-items: center;
  align-items: center;
  position: relative;
`
const Thumbnail = styled.img`
  width: 330px;
  height: 198px;
  border-radius: 20px;
`
const Title = styled(Caption)`
  max-width: 310px;
  text-align: center;
  text-transform: capitalize;
`

const PlayIconWrapper = styled.div`
  position: absolute;
  align-self: center;

  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-items: center;

  width: 78px;
  height: 78px;
  background: linear-gradient(
    180deg,
    rgba(24, 32, 79, 0.4) 0%,
    rgba(24, 32, 79, 0.25) 100%
  );
  border: 0.385106px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 15.4043px 30.8085px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(30.8085px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 80px;

  /*Animation */
  :hover {
    *,
    & {
      transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    transform: scale(1.1);
  }
`
const PlayIcon = styled.img`
  position: absolute;
  transform: scale(0.6);
`
const PlayRing = styled.img`
  position: absolute;
  left: 18px;
  bottom: 13px;
  ${PlayIconWrapper}:hover & {
    filter: hue-rotate(100deg) brightness(150%);
  }
`