import React from "react";
import { render, screen } from "@testing-library/react";
import GifPanel from "./GifPanel";

test("recieves title as altText", () => {
  render(<GifPanel gifDetails = {{id: "1234", title: "Testable Alttext Title"}}/>);
  const linkElement = screen.getByAltText(/Testable Alttext Title/i);
  expect(linkElement).toBeInTheDocument();
});

test("displays default altText", () => {
  render(<GifPanel gifDetails = {{id: "", title: ""}}/>);
  const linkElement = screen.getByAltText(/GIF not loaded/i);
  expect(linkElement).toBeInTheDocument();
});
