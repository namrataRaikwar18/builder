import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { Admin } from "./Admin";

beforeEach(() => {
  render(
    <BrowserRouter>
      <authContext.Provider
        value={{
          userData: { email: "", password: "" },
          setUserData: jest.fn(),
        }}
      >
        <Admin />
      </authContext.Provider>
    </BrowserRouter>
  );
});

describe("testing Admin page", () => {
  test("should present all register username", () => {
    const headingElement = screen.getByText(/All Registered Email:/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("show error when either title or description field is empty", () => {
    const createTodoButton = screen.getByRole("button", {
      name: "Create Todo",
    });
    fireEvent.click(createTodoButton);
    const title = screen.getByPlaceholderText("write title");
    const createButton = screen.getByRole("button", { name: "Create" });
    const desc = screen.getByPlaceholderText("start writing description");
    fireEvent.change(title, { target: { value: " " } });
    fireEvent.change(desc, { target: { value: "todo description" } });
    expect(title).toBeInTheDocument();
    fireEvent.click(createButton);
    setTimeout(() => {
      expect(screen.getByText(/Please fill the fields!/i)).toBeInTheDocument();
    }, 3000);

    fireEvent.change(title, { target: { value: "Todo" } });
    fireEvent.change(desc, { target: { value: " " } });
    fireEvent.click(createButton);
    setTimeout(() => {
      expect(screen.getByText(/Please fill the fields!/i)).toBeInTheDocument();
    }, 3000);
  });

  test("render list of users from localstorage", () => {
    const usersFromLocalstorage = ["ace, joe, jade"];

    localStorage.setItem("users", JSON.stringify(usersFromLocalstorage));
    render(
      <ol>
        {usersFromLocalstorage.map((user: any) => {
          return (
            <li data-testid="userList" key={user}>
              {user}
            </li>
          );
        })}
      </ol>
    );

    const userListItems = screen.getAllByTestId("userList");
    expect(userListItems.length).toEqual(usersFromLocalstorage.length);
    userListItems.forEach((item, index) => {
      expect(item).toHaveTextContent(usersFromLocalstorage[index]);
    });
  });
});
