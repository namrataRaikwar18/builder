import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";

describe("navbar testing", () => {
  test("should present projectname", () => {
    render(<Navbar />);
    const projectName = screen.getByTestId("buildCardProject");
    expect(projectName).toBeInTheDocument();
  });
});
