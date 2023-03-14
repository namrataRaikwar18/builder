import { render, screen } from "@testing-library/react";

import Stories from "./Stories";
describe("Stories testing", () => {
  test("should present stories ", () => {
    render(<Stories />);
    const Story = screen.getByText(/Go to Buildcard /i);
    expect(Story).toBeInTheDocument();
  });
  test("should Present Feature ", () => {
    render(<Stories />);
    const Feature = screen.getByText(/Stories /i);
    expect(Feature).toBeInTheDocument();
  });
});
