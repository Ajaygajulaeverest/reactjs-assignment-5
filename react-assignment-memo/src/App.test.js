import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("Add Todo items");
  expect(linkElement).toBeInTheDocument();
});
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("Add todo");
  expect(linkElement).toBeInTheDocument();
});
