import React from "react"
import styled from "styled-components"
import MiniCard from "./MiniCard"
import MiniButtonIcon from "../buttons/MiniButtonIcon"
import { Caption, H3 } from "../styles/TextStyles"
import { checkPropTypes } from "prop-types"
import { Link } from "gatsby"

export default function FullCard(props) {
  return (
    <Wrapper>
      <Background>
        <ContentWrapper>
          <InfoWrapper>
            <Title>{props.title || "Title"}</Title>
            <Description>{props.description || "Description"}</Description>
            <Link to={props.link}>
              <MiniButtonIcon
                title={"Tìm Hiểu Ngay"}
                style={{ width: "200" }}
              />
            </Link>
          </InfoWrapper>
          <MiniCard
            miniCardTitle={props.miniCardTitle || "Startup X.0"}
            miniCardCaption="7 Tuần"
            miniCardDescription=" Học cùng Sang Le"
            src={
              props.illustration ||
              "/images/illustration/funnelx0-illustration.svg"
            }
            backgroundColor={props.miniCardbackgroundColor}
          />
        </ContentWrapper>
      </Background>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  top: 500px;
  left: 100px;
`

/*
position: relative;
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 20px;
    width: 586px;
    height: 400px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.6);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px inset;
    border-radius: 20px;
*/

const Background = styled.div`
  width: 586px;
  height: 400px;

  background: rgba(255, 255, 255, 0.6);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px inset;
  border-radius: 20px;
`
const ContentWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  justify-items: center;
  gap: 30px;
  padding: 20px;

  box-sizing: border-box;
`
const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`
const Title = styled(H3)`
  text-transform: uppercase;
  line-height: 120%;
  font-size: 26px;
`
const Description = styled(Caption)`
  line-height: 130%;
`
