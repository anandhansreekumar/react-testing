import { render, screen } from "@testing-library/react";

import Greet from "./Greet";

describe("Greet.tsx", () => {
  test("renders correctly", () => {
    render(<Greet />);

    const textElement = screen.getByText("Hello Guest");
    expect(textElement).toBeInTheDocument();
  });

  test("renders a name", () => {
    render(<Greet name="John" />);

    const textElement = screen.getByText("Hello John");
    expect(textElement).toBeInTheDocument();
  });
});
