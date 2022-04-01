import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";

function Header() {
  return (
    <Container>
      <HeaderLeft>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt="Google Logo"
        />
      </HeaderLeft>

      <HeaderMiddle>
        <Search>
          <IconButton>
            <SearchIcon className="search_icon" />
          </IconButton>
          <input type="text" name="search" id="search" />
          <IconButton>
            <TuneIcon className="tune_icon" />
          </IconButton>
        </Search>
      </HeaderMiddle>

      <HeaderRight>
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsRoundedIcon />
        </IconButton>
        <Avatar
          src="https://lh3.googleusercontent.com/ogw/ADea4I5SUkcY5UpxizWY7LQ8knmtTSKhqMZxAYo96f-VsA=s32-c-mo"
          className="avatar"
        />
      </HeaderRight>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  padding: 8px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  img {
    background-size: contain;
    max-height: 50px;
    margin-left: 4px;
  }
`;
const HeaderMiddle = styled.div`
  display: flex;
  flex: 0.9;
`;

const Search = styled.div`
  display: flex;
  flex: 0.6;
  padding: 6px 6px;
  background: #f1f3f4;
  border-radius: 10px;
  input {
    padding: 10px 10px;
    flex: 1;
    border: none;
    outline: none;
    background: none;
    font-size: 14px;
  }
`;

const HeaderRight = styled.div`
  display: flex;

  .avatar {
    margin-left: 6px;
    cursor: pointer;
  }
`;
