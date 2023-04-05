import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MyAccount } from "./MyAccount";
import { authContext } from "../../context/authContext";

beforeEach(() => {
  render(
    <BrowserRouter>
      <authContext.Provider
        value={{
          userData: { email: "", password: "" },
          setUserData: jest.fn(),
        }}
      >
        <MyAccount />
      </authContext.Provider>
    </BrowserRouter>
  );
});

describe("testing myaccount", () => {
  test("should render changepassword modal when click on changepassword", () => {
    const headingElement = screen.getByRole("heading", {
      name: "Change password",
    });
    fireEvent.click(headingElement);
    const repeatPasswordElement = screen.getByText(/Repeat Password/i);
    expect(repeatPasswordElement).toBeInTheDocument();
  });

  test("should close the modal when clicking on close button", async () => {
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

  // test('testing the edit button', ()=> {
  //   render(<BrowserRouter><MyAccount /></BrowserRouter>)
  //   const edit = false
  //   const editButtonElement = screen.getByText(/Edit/i)
  //   fireEvent.click(editButtonElement)
  //   expect(edit).toEqual(true);
  // })
});
