import React from "react";
import styled, { css } from "styled-components";

function NavMenuItem({ Icon, title, number, active }) {
  return (
    <Container active={active ? true : false}>
      <Icon />
      <span>{title}</span>
      <p>{number}</p>
    </Container>
  );
}

export default NavMenuItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 0 12px 0 26px;
  height: 32px;
  cursor: pointer;
  color: gray;

  ${({ active }) =>
    active &&
    css`
      background: #fce8e6;
      color: #d93025;
    `}

  &:hover {
    background: lightgray;
  }

  span {
    font-size: 14px;
    margin-left: 18px;
    font-weight: ${({ active }) => active && "bold"};
    color: ${({ active }) => active && "#d93025"};
  }

  p {
    font-size: 12px;
    font-weight: bold;
    margin-left: auto;
    display: none;
    color: black;

    ${({ active }) =>
      active &&
      css`
        display: block;
        color: #d93025;
      `}
  }
`;
