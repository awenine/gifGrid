import React from "react";
import { render, screen } from "@testing-library/react";
import Form from "./Form";

test("form renders a search bar", () => {
  render(
  <Form handleSearch = {(x) => (x)}/>
  );
  expect(screen.getByRole("textbox")).toBeInTheDocument();
});

test("form renders a submit button", () => {
  render(
  <Form handleSearch = {(x) => (x)}/>
  );
  expect(screen.getByRole("button")).toBeInTheDocument();
});