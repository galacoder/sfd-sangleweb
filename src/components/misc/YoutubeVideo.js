import React from "react"
import styled from "styled-components"

import { Caption } from "../styles/TextStyles"
import { Link } from "gatsby"
import PlayButton from "./PlayButton"
export default function YoutubeVideo(props) {
  return (
    <Wrapper onClick={props.onClickPlayHandle}>
      <Link to={props.link || "/"}>
        <ContentWrapper>
          <ThumbnailWrapper>
            <Thumbnail
              src={props.thumbnailSrc || "images/background/background01.jpeg"}
            />
            <IconWrapper>
              <PlayButton onClickPlayHandle={props.onClickPlayHandle} />
            </IconWrapper>
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
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  margin: 20px;
  gap: 13px;
`
const IconWrapper = styled.div`
  position: absolute;
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
