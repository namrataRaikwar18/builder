import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { Login } from "./Login";
import mockAxios from "axios";
import userEvent from "@testing-library/user-event";

jest.mock("axios");
(mockAxios.put as jest.Mock).mockResolvedValue({
  data: { registeredUser: ["test@gmail.com"] },
});

const MockLogin = () => {
  return (
    <BrowserRouter>
      <authContext.Provider
        value={{
          userData: { email: "", password: "" },
          setUserData: jest.fn(),
        }}
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

  test("localstorage should be set correctly", () => {
    localStorage.setItem("user", "guest");
    console.log(localStorage.getItem("user"));
    expect(localStorage.getItem("user")).toBe("guest");
  });

  test("should give error when password length is smaller than 6 char long", async () => {
    const password = screen.getByPlaceholderText("Password");
    const signInButton = screen.getByRole("button", { name: /Sign In/i });
    fireEvent.change(password, { target: { value: "123" } });
    userEvent.click(signInButton);
    setTimeout(() => {
      expect(
        screen.getByText(/Password must be 6 character long./i)
      ).toBeInTheDocument();
    }, 3000);
  });

  test("show error when either email or password field is empty", async () => {
    const signInButton = screen.getByRole("button", { name: /Sign In/i });
    const email = screen.getByPlaceholderText("Email");
    const password = screen.getByPlaceholderText("Password");
    fireEvent.change(email, { target: { value: "" } });
    fireEvent.change(password, { target: { value: "password@123" } });
    userEvent.click(signInButton);
    setTimeout(() => {
      expect(screen.getByText(/Please fill the fields./i)).toBeInTheDocument();
    }, 3000);
    fireEvent.change(email, { target: { value: "test@gmail.com" } });
    fireEvent.change(password, { target: { value: "" } });
    userEvent.click(signInButton);
    setTimeout(() => {
      expect(screen.getByText(/Please fill the fields./i)).toBeInTheDocument();
    }, 3000);
  });

  test("should be logged in after entering valid email and password", async () => {
    const signInButton = screen.getByRole("button", { name: /Sign In/i });
    const email = screen.getByPlaceholderText("Email");
    const password = screen.getByPlaceholderText("Password");
    fireEvent.change(email, { target: { value: "test@gmail.com" } });
    fireEvent.change(password, { target: { value: "password@123" } });
    userEvent.click(signInButton);
    setTimeout(() => {
      expect(screen.getByText(/LoggedIn successfully/i)).toBeInTheDocument();
    }, 3000);
  });
});
