import { render, screen, fireEvent } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import {BrowserRouter} from 'react-router-dom';

describe("testing sidebar component", () => {
  test("should render popover when click on profile", () => {
    render(<BrowserRouter><Sidebar /></BrowserRouter>);
    const footerElement = screen.getByTestId("sidebarFotter");
    fireEvent.click(footerElement);
    const accountModel = screen.getByText(/My Account/i);
    expect(accountModel).toBeInTheDocument();
  });
});
