import React from "react";
import styled from "styled-components";
import InboxIcon from "@mui/icons-material/Inbox";
import NavMenuItem from "./NavMenuItem";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendIcon from "@mui/icons-material/Send";

function Sidebar() {
  return (
    <Container>
      <ButtonAdd>Tulis</ButtonAdd>
      <NavMenu>
        <NavMenuItem Icon={InboxIcon} title="Kotak Masuk" number="30" active />
        <NavMenuItem Icon={StarIcon} title="Berbintang" number="30" />
        <NavMenuItem Icon={AccessTimeFilledIcon} title="Tertunda" number="30" />
        <NavMenuItem Icon={LabelImportantIcon} title="Penting" number="30" />
        <NavMenuItem Icon={SendIcon} title="Terkirim" number="30" />
      </NavMenu>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  max-width: 230px;
`;

const ButtonAdd = styled.div`
  cursor: pointer;
  margin: 16px 8px;

  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  font-size: 0.875rem;
  letter-spacing: 0.25px;
  align-items: center;
  background-color: #fff;
  border-radius: 24px;
  color: #3c4043;
  display: inline-flex;
  font-weight: 500;
  height: 48px;
  padding: 0 24px;
  padding-left: 0;
  transition: all 250ms;

  &:before {
    content: "";
    background: url("https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png");
    width: 30px;
    height: 30px;
    background-position: center;
    background-repeat: no-repeat;
    padding-left: 24px;
  }

  &:hover {
    box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%),
      0 4px 8px 3px rgb(60 64 67 / 15%);
    background-color: #fafafb;
  }
`;

const NavMenu = styled.div``;
