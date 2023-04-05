import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { Login } from "./Login";

const MockLogin = () => {
  return (
    <BrowserRouter>
      <authContext.Provider
        value={{ userData: {email:"", password:""}, setUserData: jest.fn() }}
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

  // test("onchange event should work", () => {
  //   const onchangeMock = jest.fn();
  //   const emailInput = screen.getByRole('textbox',{name:/email/i});
  //   const {container}  = render(<input)
  //   // const passwordInput = screen.getByLabelText("Password");
  //   fireEvent.change(emailInput, { target: { value: "admin@gmail.com" } });
  //   // fireEvent.change(passwordInput, { target: { value: "adminpassword" } });
  //   // console.log(emailInput.nodeValue, passwordInput)
  //   expect(onchangeMock).toHaveBeenCalledWith("admin@gmail.com");
  //   // expect(passwordInput).toHaveDisplayValue("adminpassword");
  // });
});
