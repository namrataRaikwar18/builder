import { render, screen } from "@testing-library/react";
import { CreateTodoModal } from "./CreateTodoModal";

describe("testing createTodoModal", () => {
  test("modal should present", () => {
    render(
      <CreateTodoModal
        setCreateTodoModal={jest.fn()}
        todoDetail={{
          title: "",
          description: "",
        }}
        setTodoDetail={jest.fn()}
        postData={jest.fn()}
      />
    );

    const headingElement = screen.getByRole("heading", {
      name: /Create Todo/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
});
