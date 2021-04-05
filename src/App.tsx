import React from "react";
import "./App.css";
import DisplayGrid from "./components/DisplayGrid";
import Form from "./components/Form";
import GifPanel from "./components/GifPanel";
import HeaderBanner from "./components/HeaderBanner";
import SearchBar from "./components/SearchBar";
import SubmitButton from "./components/SubmitButton";

function App() {
  return (
    <div>
      <HeaderBanner />
      <Form />
      <DisplayGrid>
        <GifPanel />
      </DisplayGrid>
    </div>
  );
}

export default App;
