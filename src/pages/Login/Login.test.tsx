import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { Login } from "./Login";

const MockLogin = () => {
  return (
    <BrowserRouter>
      <authContext.Provider
        value={{ registerUser: [], setregisterUser: jest.fn() }}
      >
        <Login />
      </authContext.Provider>
    </BrowserRouter>
  );
};

beforeEach(() => {
  render(<MockLogin />);
});

describe("testing login page", () => {
  test("sign in button should be in the document", () => {
    const signInButton = screen.getByRole("button", { name: /Sign In/i });
    expect(signInButton).toBeInTheDocument();
  });

  test("should present both email and password input", () => {
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    expect(emailInput && passwordInput).toBeInTheDocument();
  });

  test("onchange event should work", () => {
    const emailInput = screen.getByLabelText("Email address");
    const passwordInput = screen.getByLabelText("Password");
    fireEvent.change(emailInput, { target: { value: "admin" } });
    fireEvent.change(passwordInput, { target: { value: "adminpassword" } });
    expect(emailInput).toHaveDisplayValue("admin");
    expect(passwordInput).toHaveDisplayValue("adminpassword");
  });
});
