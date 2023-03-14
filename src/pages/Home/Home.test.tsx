import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

describe("testing home page", () => {
  test("should present project name", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const projectName = screen.getByTestId('CarShipapp');
    expect(projectName).toBeInTheDocument();
  });
});
