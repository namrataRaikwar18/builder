import React from "react";

type TodoDetailType = {
  title: string;
  description: string;
};

type CreateTodoModalType = {
  setCreateTodoModal: React.Dispatch<React.SetStateAction<boolean>>;
  todoDetail: TodoDetailType;
  setTodoDetail: React.Dispatch<React.SetStateAction<TodoDetailType>>;
  createTodoHandler: () => void;
};

const CreateTodoModal = ({
  setCreateTodoModal,
  todoDetail,
  setTodoDetail,
  createTodoHandler,
}: CreateTodoModalType) => {
  const closeCreateTodo = () => {
    setCreateTodoModal(false);
  };

  return (
    <main className="chPswdModalMain" onClick={closeCreateTodo}>
      <div className="createTodoModal" onClick={(e) => e.stopPropagation()}>
        <h2>Create Todo</h2>
        <label htmlFor="title" className="modalLabel">
          Title
          <input
            id="title"
            type="text"
            className="informationInput"
            required
            onChange={(e) =>
              setTodoDetail({ ...todoDetail, title: e.target.value })
            }
          />
        </label>
        <label htmlFor="Description" className="modalLabel">
          Description
          <textarea
            name=""
            id="Description"
            className="informationInput"
            required
            onChange={(e) =>
              setTodoDetail({ ...todoDetail, description: e.target.value })
            }
          ></textarea>
        </label>
        <button className="btn primaryBtn" onClick={() => createTodoHandler()}>
          Create
        </button>
      </div>
    </main>
  );
};

export { CreateTodoModal };
