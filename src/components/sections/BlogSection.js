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
      <MiniButtonIcon title="Browse More" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  top: 100px;
  bottom: 100px;
  height: 888px;
  display: grid;
  grid-template-columns: auto;
  justify-items: center;
  align-items: center;
  gap: 30px;
`

const SectionWrapper = styled.div``

const BlogCards = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.count}, 1fr);
  gap: 20px;
  margin: 50px;
`
