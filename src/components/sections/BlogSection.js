import React from "react"
import styled from "styled-components"
import SectionInfo1 from "../misc/SectionInfo1"
import BlogPost from "../card/BlogPost"
import { blogData } from "../../data/blogData"
import MiniButtonIcon from "../buttons/MiniButtonIcon"

export default function BlogSetion() {
  return (
    <Wrapper>
      <SectionWrapper>
        <SectionInfo1
          caption="Bài Viết Nổi Bật"
          title="Blog"
          description="Trải nghiệm ngay cách đọc tin mới nhất với hình ảnh và âm thanh sống động"
          textColor="black"
        />
      </SectionWrapper>

      <BlogCards count={blogData.length}>
        {blogData.map((item, index) => {
          return (
            <BlogPost
              imgSrc={item.imgSrc}
              title={item.title}
              caption={item.caption}
              link={item.link}
              index={index}
              backgroundColor={item.backgroundColor}
            />
          )
        })}
      </BlogCards>
      <ButtonWrapper>
        <MiniButtonIcon title="Browse More" />
      </ButtonWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 888px;
  margin-top: 150px;

  display: grid;
  grid-template-columns: auto;
  justify-items: center;
  align-items: center;
  gap: 30px;

  position: relative;

  @media (max-width: 450px) {
    height: 688px;
    margin-bottom: 150px;
  }
`

const SectionWrapper = styled.div`
  width: 100%;
`

const ButtonWrapper = styled.div`
  @media (max-width: 450px) {
    position: absolute;
    top: 700px;
  }
`

const BlogCards = styled.div`
  width: 100%;
  height: 500px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(${props => props.count}, 1fr);
  margin: 30px;
  box-sizing: border-box;
  padding-left: 20px;

  @media (max-width: 450px) {
    gap: 30px;
  }

  /* Scrolling */

  overflow-y: hidden;
  overflow-x: auto;
`
