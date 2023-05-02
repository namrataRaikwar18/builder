import React from "react";

type TodoDetailType = {
  title: string;
  description: string;
};

type CreateTodoModalType = {
  setCreateTodoModal: React.Dispatch<React.SetStateAction<boolean>>;
  todoDetail: TodoDetailType;
  setTodoDetail: React.Dispatch<React.SetStateAction<TodoDetailType>>;
  postData: () => void;
};

const CreateTodoModal = ({
  setCreateTodoModal,
  todoDetail,
  setTodoDetail,
  postData,
}: CreateTodoModalType) => {
  return (
    <main className="chPswdModalMain" onClick={() => setCreateTodoModal(false)}>
      <div className="createTodoModal" onClick={(e) => e.stopPropagation()}>
        <h2>Create Todo</h2>
        <label htmlFor="title" className="modalLabel">
          Title
          <input
            data-testid="title"
            id="title"
            type="text"
            className="informationInput"
            required
            placeholder="write title"
            onChange={(e) =>
              setTodoDetail({ ...todoDetail, title: e.target.value })
            }
          />
        </label>
        <label htmlFor="Description" className="modalLabel">
          Description
          <textarea
            placeholder="start writing description"
            name=""
            id="Description"
            className="informationInput"
            required
            onChange={(e) =>
              setTodoDetail({ ...todoDetail, description: e.target.value })
            }
          ></textarea>
        </label>
        <button className="btn primaryBtn" onClick={() => postData()}>
          Create
        </button>
      </div>
    </main>
  );
};

export { CreateTodoModal };
