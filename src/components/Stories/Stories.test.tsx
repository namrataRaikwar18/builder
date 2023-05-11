import { screen } from "@testing-library/react";
import { render} from "@testing-library/react";
import Stories from "./Stories";
import { BrowserRouter } from "react-router-dom";
import { authContext } from "../../context/authContext";

describe("testing sidebar component", () => {
  test("should render Stories ", () => {
    render(
      <BrowserRouter>
      <authContext.Provider
        value={{ userData: {email:"", password:""}, setUserData: jest.fn() }}
      >
        <Stories />
      </authContext.Provider>
      </BrowserRouter>
    );
    
  const Create_Story = screen.getByRole("button", { name: /create story/i});
      expect(Create_Story).toBeInTheDocument();

  const Element = screen.getByText(/features/i)    
   expect(Element).toBeInTheDocument();
})
});



