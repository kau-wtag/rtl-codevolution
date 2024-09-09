import { render, screen } from "@testing-library/react";
import Application from ".";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      //   name: "Job application form",
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      //   name: "Section 1",
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const paragraphEl = screen.getByText("All fields are mandatory");
    expect(paragraphEl).toBeInTheDocument();

    const closeEl = screen.getByTitle("close");
    expect(closeEl).toBeInTheDocument();

    const imgEl = screen.getByAltText("a person with a laptop");
    expect(imgEl).toBeInTheDocument();

    const nameEl = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameEl).toBeInTheDocument();

    const nameEl2 = screen.getByLabelText("Name");
    expect(nameEl2).toBeInTheDocument();

    const nameEl3 = screen.getByPlaceholderText("Fullname");
    expect(nameEl3).toBeInTheDocument();

    const nameEl4 = screen.getByDisplayValue("Kaium");
    expect(nameEl4).toBeInTheDocument();

    const bioEl = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioEl).toBeInTheDocument();

    const jobLocationEl = screen.getByRole("combobox");
    expect(jobLocationEl).toBeInTheDocument();

    const termsEl = screen.getByRole("checkbox");
    expect(termsEl).toBeInTheDocument();

    const termsEl2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsEl2).toBeInTheDocument();

    const submitBtnEl = screen.getByRole("button");
    expect(submitBtnEl).toBeInTheDocument();
  });
});
