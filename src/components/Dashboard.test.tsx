import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";

test("renders with default text", () => {
  render(
    <Dashboard />
  );
  expect(screen.getByText(/Sorry/i)).toBeInTheDocument();
});
