import React from "react";
import "./App.css";
import DisplayGrid from "./components/DisplayGrid";
import Form from "./components/Form";
import HeaderBanner from "./components/HeaderBanner";

function App() {
  return (
    <div>
      <HeaderBanner />
      <Form />
      <DisplayGrid />
    </div>
  );
}

export default App;
