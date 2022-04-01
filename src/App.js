import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
