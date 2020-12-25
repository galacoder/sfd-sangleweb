import React from "react"
import styled from "styled-components"
import SocialLogo from "../misc/SocialLogo"
import MiniButtonIcon from "../buttons/MiniButtonIcon"
import { Caption, H1, H3, BodyMain, BodyIntro } from "../styles/TextStyles"

export default function SocialSection() {
  return (
    <Wrapper>
      <SocialWrapper>
        <ContentWrapper>
          <SCaption>Mạng Xã Hội</SCaption>
          <Title> Hãy Kết Nối Ngay với Sang Le </Title>
          <Description>Hãy Kết Nối Ngay với Sang Le</Description>
          <SocialLogo />
        </ContentWrapper>
      </SocialWrapper>
      <TipWrapper>
        <TContentWrapper>
          <TCaption>Facebook Messenger</TCaption>
          <TTitle>Mẹo vặt và Bí kíp </TTitle>
          <TDescriptions>
            Click để đăng ký tham gia miễn phí cùng hàng ngàn người theo dõi
            khác ngay trên Facebook Messenger. Bạn sẽ nhận các thông tin, bí
            quyết từ Sang mỗi tuần để giúp bạn bước đi tự tin trên hành trình
            4.0
          </TDescriptions>
        </TContentWrapper>
        <MiniButtonIcon
          title="Tham gia ngay"
          background="linear-gradient(306.87deg, #FF7777 22.29%, #EF234C 75.32%)"
        />
      </TipWrapper>
    </Wrapper>
  )
}
//Social Wrapper Styled
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 1000px;
  top: 200px;

  display: grid;
  grid-template-columns: 1fr 2fr;

  justify-items: center;
  align-items: center;
`
const SocialWrapper = styled.div`
  width: 665px;
  height: 510px;

  /* Gradient 9 */

  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 0px 60px 60px 0px;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 30px;
  align-content: left;
  justify-content: left;

  padding: 60px 60px;
`

const SCaption = styled(Caption)`
  color: #41afec;
`
const Title = styled(H1)`
  color: white;
`
const Description = styled(BodyIntro)`
  color: white;
`

//Tip Wrapper Styled
const TipWrapper = styled.div`
  width: 421px;
  height: 380px;

  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-items: center;
  gap: 30px;
`
const TContentWrapper = styled.div`
  padding: 30px 30px;
  display: grid;
  grid-template-columns: auto;
  gap: 20px;

  /* Gradient */

  background: linear-gradient(306.87deg, #ff4b1f 22.29%, #ff9068 75.32%);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 40px;
`

const TCaption = styled(Caption)`
  color: white;
`
const TTitle = styled(H3)`
  color: white;
`
const TDescriptions = styled(BodyMain)`
  color: white;
`
