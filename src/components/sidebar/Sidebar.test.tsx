import { render, screen, fireEvent } from "@testing-library/react";
import { Sidebar } from "./Sidebar";

describe("testing sidebar component", () => {
  test("should render popover when click on profile", () => {
    render(<Sidebar />);
    const footerElement = screen.getByTestId("sidebarFotter");
    fireEvent.click(footerElement);
    const accountModel = screen.getByText(/My Account/i);
    expect(accountModel).toBeInTheDocument();
  });
});
