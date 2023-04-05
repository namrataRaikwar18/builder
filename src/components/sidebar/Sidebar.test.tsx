import { render, screen, fireEvent } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { BrowserRouter } from "react-router-dom";
import { authContext } from "../../context/authContext";

describe("testing sidebar component", () => {
  test("should render popover when click on profile", () => {
    render(
      <BrowserRouter>
      <authContext.Provider
        value={{ userData: {email:"", password:""}, setUserData: jest.fn() }}
      >
        <Sidebar />
      </authContext.Provider>
      </BrowserRouter>
    );
    const footerElement = screen.getByTestId("sidebarFotter");
    fireEvent.click(footerElement);
    const accountModel = screen.getByText(/My Account/i);
    expect(accountModel).toBeInTheDocument();
  });
});
