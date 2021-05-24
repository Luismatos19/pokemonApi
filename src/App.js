import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./globalStyle/globalStyle";
import Routes from "./routes/routes";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
