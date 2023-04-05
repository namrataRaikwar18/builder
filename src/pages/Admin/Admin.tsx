import React, {useState } from "react";
import { toast } from "react-hot-toast";
import { CreateTodoModal } from "../../components/CreateTodoModal/CreateTodoModal";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./Admin.css";

const Admin = () => {
  const usersFromLocalstorage = JSON.parse(localStorage.getItem('registeredUser') || '[]')

  const [createTodoModal, setCreateTodoModal] = useState<boolean>(false);


  const [todoDetail, setTodoDetail] = useState({
    title: "",
    description: "",
  });

  const {title, description} = todoDetail;

  const todoListFromLocal =  JSON.parse(localStorage.getItem("todoList") || '[]')

  const [todoList, setTodoList] = useState<object[]>(todoListFromLocal);

  const createTodoHandler = () => {
    if(title == '' || description=="" && title==' ' || description==' '){
      toast.error('please fill the fields!')
    }else{
      todoList.push(todoDetail);
      setTodoList([...todoList]);
      setTodoDetail({ title: "", description: "" });
      localStorage.setItem("todoList", JSON.stringify(todoList));
      setCreateTodoModal(false);
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
              {usersFromLocalstorage?.map((user:any) => {
            return(
              <li key={user}>{user}</li>
              )
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
          createTodoHandler={createTodoHandler}
        />
      ) : null}
    </main>
  );
};

export { Admin };
