import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Title placeholder", () => {
  render(<App />);
  const titleElement = screen.getByText(/Title/i);
  expect(titleElement).toBeInTheDocument();
});
