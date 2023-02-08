import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { textSpanContainsPosition } from "typescript";
import { ChangePswdModal } from "./ChangePswdModal";

const mockedsetChngPswdModal = jest.fn();
const onClickmain = jest.fn();
const onClickinner = jest.fn();

describe("testing changepswdmodal", () => {
  test("should not propagate the click event", async () => {
    render(
      <main
        className="chPswdModalMain"
        data-testid="chPswdModalMain"
        onClick={onClickmain}
      >
        <div
          className="chPswdModal"
          data-testid="chPswdModal"
          onClick={onClickinner}
        ></div>
      </main>
    );
    const chPswdModalMainElement = screen.getByTestId("chPswdModalMain");
    fireEvent.click(chPswdModalMainElement);
    expect(onClickmain).toHaveBeenCalledTimes(1);
    expect(onClickinner).toHaveBeenCalledTimes(0);
  });

  test("should find the main heading of component", () => {
    render(
      <ChangePswdModal
        chngPswdModal={false}
        setChngPswdModal={mockedsetChngPswdModal}
      />
    );
    const headingElement = screen.getByRole("heading", {
      name: "Change Password",
    });
    expect(headingElement).toBeInTheDocument();
  });

  test("should present all button", () => {
    render(
      <ChangePswdModal
        chngPswdModal={false}
        setChngPswdModal={mockedsetChngPswdModal}
      />
    );
    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement.length).toBe(2);
  });

  test("should present all password text", () => {
    render(
      <ChangePswdModal
        chngPswdModal={false}
        setChngPswdModal={mockedsetChngPswdModal}
      />
    );
    const passwordText = screen.getAllByText(/Password/i);
    expect(passwordText.length).toEqual(3);
  });

  test("should show the password when clicking on eye icon", () => {
    render(
      <ChangePswdModal
        chngPswdModal={false}
        setChngPswdModal={mockedsetChngPswdModal}
      />
    );
    const inputElement = screen.getByPlaceholderText("Password");
    const closeEyeIcon = screen.getByTestId("closeEyeIconTestId");
    fireEvent.click(closeEyeIcon);
    expect(inputElement).toHaveAttribute("type", "text");
    const showeyeIcon = screen.getByTestId("showEyeIconTestid");
    fireEvent.click(showeyeIcon);
    expect(inputElement).toHaveAttribute("type", "password");
  });
});
