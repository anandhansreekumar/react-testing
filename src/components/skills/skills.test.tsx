import { render, screen } from "@testing-library/react";

import Skills from "../skills/Skills";

describe("Skills", () => {
  const skills = ["React", "Vue", "Angular"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders list of skills", () => {
    render(<Skills skills={skills} />);

    const listElements = screen.getAllByRole("listitem");
    expect(listElements).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);

    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  test("start learning button is not rendered", () => {
    render(<Skills skills={skills} />);

    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });
});
