import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title placeholder", () => {
  render(<App />);
  const titleElement = screen.getByText(/Netflix/i);
  expect(titleElement).toBeInTheDocument();
});
