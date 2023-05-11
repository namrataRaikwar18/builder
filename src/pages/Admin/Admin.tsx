import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { CreateTodoModal } from "../../components/CreateTodoModal/CreateTodoModal";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./Admin.css";
import axios from "axios";

const todoLocal: object[] = [];
const getTodoList = async () => {
  try {
    const res = await axios.get(
      "https://builder-e72c1-default-rtdb.firebaseio.com/todoList.json"
    );
    const resData = res.data;
    console.log("getTodo", res);
    todoLocal.push([...resData.todoList]);
    localStorage.setItem("todoList", JSON.stringify(resData.todoList));
  } catch (error) {
    console.error(error);
  }
};

const Admin = () => {
  const usersFromLocalstorage = JSON.parse(
    localStorage.getItem("registeredUser") || "[]"
  );

  const [createTodoModal, setCreateTodoModal] = useState<boolean>(false);
  const [todoDetail, setTodoDetail] = useState({
    title: "",
    description: "",
  });

  const { title, description } = todoDetail;

  const [todoList, setTodoList] = useState<object[]>([]);

  useEffect(() => {
    setTodoList(todoLocal);
    getTodoList();
  }, []);

  //todo using localStorage

  // const createTodoHandler = () => {
  //   if(title == '' || description=="" && title==' ' || description==' '){
  //     toast.error('please fill the fields!')
  //   }else{
  //     todoList.push(todoDetail);
  //     setTodoList([...todoList]);
  //     setTodoDetail({ title: "", description: ""});
  //     localStorage.setItem("todoList", JSON.stringify(todoList));
  //     setCreateTodoModal(false);
  //   }
  // };

  const postData = async () => {
    if (title && description && title !== " " && description !== " ") {
      todoList.push(todoDetail);
      setTodoList([...todoList]);
      try {
        setCreateTodoModal(false);
        const res = await axios.put(
          "https://builder-e72c1-default-rtdb.firebaseio.com/todoList.json",
          {
            todoList,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setTodoDetail({ title: "", description: "" });
        localStorage.setItem("todoList", JSON.stringify(res.data.todoList));
      } catch (error: any) {
        console.error(error.message);
      }
    } else {
      toast.error("Please fill the fields!");
    }
  };

  return (
    <main className="adminMain">
      <Sidebar />
      <div className="adminDiv">
        <section className="adminSection">
          <div className="adminHeader">
            <div className="todoAdminDiv">
              <h1 className="adminHeading">Admin Portal</h1>
              <button
                className="btn primaryBtn"
                onClick={() => setCreateTodoModal(!createTodoModal)}
              >
                Create Todo
              </button>
            </div>
            <p className="divider"></p>
          </div>
          <h3>All Registered Email:</h3>
          <div>
            <ol className="emailList padding_2rem">
              {usersFromLocalstorage?.map((user: any) => {
                return (
                  <li key={user} data-testid="userList">
                    {user}
                  </li>
                );
              })}
            </ol>
          </div>
        </section>
      </div>
      {createTodoModal ? (
        <CreateTodoModal
          setCreateTodoModal={setCreateTodoModal}
          todoDetail={todoDetail}
          setTodoDetail={setTodoDetail}
          postData={postData}
        />
      ) : null}
    </main>
  );
};

export { Admin, getTodoList };
