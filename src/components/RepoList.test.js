import React from "react";
import { render, screen } from "@testing-library/react";
import RepoList from "./RepoList";

test("renders list of repos", () => {
  render(<RepoList />);
  const repoHeader = screen.getByText(/Repos/i);
  expect(repoHeader).toBeInTheDocument();
});
