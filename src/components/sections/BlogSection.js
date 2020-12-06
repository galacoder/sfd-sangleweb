import React from "react"
import styled from "styled-components"
import SectionInfo1 from "../misc/SectionInfo1"
import BlogPost from "../card/BlogPost"
import { blogData } from "../../data/blogData"

export default function BlogSetion() {
  return (
    <Wrapper>
      <SectionWrapper>
        <SectionInfo1
          caption="Youtube Videos"
          title="Featured"
          description="Amazing"
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  top: 3000px;
  display: grid;
  grid-template-columns: auto;
  justify-items: center;
  align-items: center;
`

const SectionWrapper = styled.div`
  margin: 50px;
`

const BlogCards = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.count}, 1fr);
  gap: 20px;
  margin: 50px;
`
