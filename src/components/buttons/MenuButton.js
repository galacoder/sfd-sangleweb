import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Caption } from "../styles/TextStyles"

export default function MenuButton(props) {
  const { item } = props

  return (
    <Link to={item.link} onClick={props.onClick}>
      <MenuItem title={item.title}>
        <img src={item.icon} alt={item.title} />
        {item.title}
      </MenuItem>
    </Link>
  )
}

const MenuItem = styled(Caption)`
  /* Visual */
  color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;

  /* Positioning */
  display: grid;
  grid-template-columns: 24px auto;
  gap: ${props => (props.title ? "10px" : "0px")};
  align-items: center;
  padding: 10px;

  /* Animation */
  transition: 0.5s ease-in;
  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`
