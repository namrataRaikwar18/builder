import { fireEvent, render, screen } from "@testing-library/react";
import { MyAccount } from "./MyAccount";

describe("testing myaccount", () => {
  test("should render changepassword modal when click on changepassword", () => {
    render(<MyAccount />);
    const headingElement = screen.getByRole("heading", {
      name: "Change password",
    });
    fireEvent.click(headingElement);
    const repeatPasswordElement = screen.getByText(/Repeat Password/i);
    expect(repeatPasswordElement).toBeInTheDocument();
  });

  test("should close the modal when clicking on close button", async () => {
    render(<MyAccount />);
    const headingElement = screen.getByRole("heading", {
      name: "Change password",
    });
    fireEvent.click(headingElement);
    const repeatPasswordElement = screen.getByText(/Repeat Password/i);
    expect(repeatPasswordElement).toBeInTheDocument();
    const buttonElement = screen.getByText(/Cancel/i);
    fireEvent.click(buttonElement);
    expect(repeatPasswordElement).not.toBeInTheDocument();
  });

  test("should close the modal when clicking outside the modal too", () => {
    render(<MyAccount />);
    const headingElement = screen.getByRole("heading", {
      name: "Change password",
    });
    fireEvent.click(headingElement);
    const repeatPasswordElement = screen.getByText(/Repeat Password/i);
    expect(repeatPasswordElement).toBeInTheDocument();
    const chPswdModalMainElement = screen.getByTestId("chPswdModalMain");
    fireEvent.click(chPswdModalMainElement);
    expect(repeatPasswordElement).not.toBeInTheDocument();
  });
});
