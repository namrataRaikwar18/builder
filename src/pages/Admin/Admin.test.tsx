import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { Admin } from "./Admin";

describe("testing Admin page", () => {
  test("should present all register username", () => {
    render(
      <BrowserRouter>
        <authContext.Provider
          value={{ registerUser: [], setregisterUser: jest.fn() }}
        >
          <Admin />
        </authContext.Provider>
      </BrowserRouter>
    );
    const headingElement = screen.getByText(/All Registered Email:/i);
    expect(headingElement).toBeInTheDocument();
  });
});
