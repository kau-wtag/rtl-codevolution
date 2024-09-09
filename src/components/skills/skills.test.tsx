import { render, screen } from "@testing-library/react";
import Skills from ".";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listEl = screen.getByRole("list");
    expect(listEl).toBeInTheDocument();
  });

  test("renders list of skill", () => {
    render(<Skills skills={skills} />);
    const listItemEl = screen.getAllByRole("listitem");
    expect(listItemEl).toHaveLength(3);
  });
});
