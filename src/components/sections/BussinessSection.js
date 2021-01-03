import React from "react"
import styled from "styled-components"
import WaveBackground02 from "../backgrounds/WaveBackground02"
import { Caption2, H2, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import FullCard from "../card/FullCard"
import Certificates from "../misc/Certificates"

export default function BusinessSection() {
  return (
    <Wrapper>
      <WaveBackground02
        background01="images/waves/courses-wave1.svg"
        background02=""
        background03=""
        circleVisiable="hidden"
      />
      <ContentWrapper>
        <TextWrapper>
          <Caption>7 Tuần chất như nước cất</Caption>
          <Title>Khóa Học Kinh Doanh 4.0</Title>
          <Description>
            Sau hơn 10 năm hoạt động kinh doanh ở nhiều lĩnh vực khác nhau, tổn
            thất hàng trăm ngàn đô la và nhiều đêm mất ngủ, Sang Lê đã học được
            vô số bài học đắt giá để có thể giúp bạn XÂY DỰNG ƯỚC MƠ KHỞI
            NGHIỆP.
          </Description>
        </TextWrapper>
        <CertificateWrapper>
          <Certificates />
        </CertificateWrapper>
      </ContentWrapper>

      <Courses>
        <FullCard
          title="xây dựng khởi nghiệp của bạn từ A-Z và marketing ra thị trường"
          description="XÂY DỰNG ƯỚC MƠ KHỞI NGHIỆP, và bước trên CON ĐƯỜNG NGẮN NHẤT đến
              sự thành công trong thời đại 4.0."
          illustration="/images/illustration/startupx0-illustration.svg"
          link="/startupX0"
          miniCardbackgroundColor="linear-gradient(209.21deg, rgb(200, 255, 222) 13.57%, rgb(53, 142, 239) 98.38%)"
        />
        <FullCard
          title="xây dựng phễu Marketing “đẻ ra tiền"
          description="Nếu bạn đang loay hoay tìm ra câu trả lời cho việc kinh doanh của bạn đang rơi vào tình trạng trì trệ thì chương trình Funnel X.0 sẽ giúp cho doanh nghiệp của bạn."
          illustration="/images/illustration/funnelx0-illustration.svg"
          miniCardTitle="Funnel X.0"
          miniCardbackgroundColor="linear-gradient(209.21deg, rgb(159, 127, 229) 13.57%, rgb(78, 153, 227) 98.38%);"
          link="/funnelX0"
        />
      </Courses>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 1268px;
  @media (max-width: 450px) {
    height: 1668px;
  }
`
const ContentWrapper = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  height: 200px;
  top: 150px;
  left: 100px;

  @media (max-width: 450px) {
    display: grid;
    grid-template-columns: auto;
    left: 0px;
    padding: 20px;
    top: 100px;
    gap: 20px;
  }
`
const TextWrapper = styled.div`
  display: grid;
  gap: 20px;
  z-index: 1;

  @media (max-width: 450px) {
    display: grid;
    grid-template-columns: auto;
    width: 100vw;
    padding: 30px;
    padding-left: 0px;
  }
`
const Caption = styled(Caption2)`
  color: ${themes.dark.text1};
  opacity: 0.7;
`
const Title = styled(H2)`
  color: ${themes.dark.text1};
`
const Description = styled(MediumText)`
  color: ${themes.dark.text1};
  opacity: 0.7;
`
const CertificateWrapper = styled.div``

const Courses = styled.div`
  /* display: flex;
  flex-direction: row; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  position: absolute;
  gap: 30px;
  top: 350px;

  @media (max-width: 450px) {
    width: 100vw;
    grid-template-columns: auto;

    padding-left: 30px;
    overflow-x: auto;
    overflow-y: hidden;
  }
`
