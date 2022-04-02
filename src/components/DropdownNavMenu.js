import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function DropdownNavMenu({ children, header }) {
  const [dropdown, setDropdown] = useState(false);
  const [height, setHeight] = useState("");
  const content = useRef(null);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  useEffect(() => {
    setHeight(content.current.scrollHeight);
  }, []);

  return (
    <Container>
      <HeaderDropdown onClick={toggleDropdown}>{header}</HeaderDropdown>
      <ContentDropdown dropdown={dropdown} ref={content} height={height}>
        {children}
      </ContentDropdown>
    </Container>
  );
}

export default DropdownNavMenu;

const Container = styled.div``;

const ContentDropdown = styled.div`
  overflow: hidden;
  transition: all 400ms;
  max-height: ${({ dropdown, height }) => (dropdown ? height + "px" : "0px")};
`;

const HeaderDropdown = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 0;
  width: 100%;
`;
