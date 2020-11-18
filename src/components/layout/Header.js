import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const menuData = [
  { title: "Trang Chủ", icon: "/images/icons/home.svg", link: "/trang-chu" },
  {
    title: "Sang Lê là ai?",
    icon: "/images/icons/home.svg ",
    link: "/sang-le-la-ai",
  },
  {
    title: "Chương Trình",
    icon: "/images/icons/home.svg",
    link: "/chuong-trinh",
  },
  { title: "Tư Vấn", icon: "/images/icons/home.svg", link: "/tu-van" },
  { title: "Dịch Vụ", icon: "/images/icons/home.svg", link: "/dich-vu" },
]

export default function Header() {
  return (
    <>
      {menuData.map((item, index) => (
        <Link to={item.link} key={index}>
          <img
            src={item.icon}
            style={{ backgroundColor: "black" }}
            alt={item.title}
          />
          {item.title}
        </Link>
      ))}
    </>
  )
}
