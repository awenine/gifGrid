import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import HeaderBanner from "./components/HeaderBanner";

function App() {
  return (
    <div className="flex flex-col items-center">
      <HeaderBanner />
      <Dashboard />
    </div>
  );
}

export default App;
