import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

* {
  box-sizing: border-box;
  scroll-behavior: smooth;
  margin: 0;
}

body {
  background-color: white;
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  color: #222;
  overflow-x: hidden;
}

a {
  color: #222;
  text-decoration: none;
}

`;

export default GlobalStyle;
