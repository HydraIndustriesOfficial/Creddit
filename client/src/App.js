import React from "react";
import { Header } from "../src/features/header/header";
import Main from "../src/features/main/main";
import "../src/theme/App.css";

function App() {
  return (
    <div className="app_main">
      <Header />
      <Main />
    </div>
  );
}

export default App;
