import { render, screen } from "@testing-library/react";
import App from "./App";
describe("test for the fibanocci application", () => {
  test("text to be on the screen", () => {
    render(<App />);
    const linkElement = screen.getByText("Fibbanoci of");
    expect(linkElement).toBeInTheDocument();
  });
  test("for the number to be on the screen", () => {
    render(<App />);
    const linkElement = screen.getByText("Reset");
    expect(linkElement).toBeInTheDocument();
  });
});
