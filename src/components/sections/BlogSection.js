import React from "react"
import styled from "styled-components"
import SectionInfo1 from "../misc/SectionInfo1"
import MiniCard from "../card/MiniCard"

export default function BlogSetion() {
  return (
    <Wrapper>
      <SectionInfo1 textColor="black" />
      <BlogCards>
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
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
const BlogCards = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`
