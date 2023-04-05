import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { authContext } from "../../context/authContext";

describe("testing home page", () => {
  test("should present project name", () => {
    render(
      <BrowserRouter>
        <authContext.Provider
          value={{
            userData: { email: "", password: "" },
            setUserData: jest.fn(),
          }}
        >
          <Home />
        </authContext.Provider>
      </BrowserRouter>
    );
    const projectName = screen.getAllByTestId("project");
    expect(projectName.length).toBe(2);
  });
});
