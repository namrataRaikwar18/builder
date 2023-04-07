import React, { useState } from "react";
import { ReadMore } from "../../Assets/ReadMore/ReadMore";
import "./Stories.css";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  FilterOutlined,
  InfoCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { GoTasklist } from "react-icons/go";
import { Sidebar } from "../sidebar/Sidebar";
import { Navbar } from "../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { CreateStoryModal } from "../CreateStory/CreateStoryModal";
const Stories = () => {
  const [readMore, setReadMore] = useState(false);

  const [storyModal, setStoryModal] = useState<boolean>(false);

  // const todoListFromLocal =  JSON.parse(localStorage.getItem("todoList") || '[]')

  const [storyList, setStoryList] = useState<object[]>(
    JSON.parse(localStorage.getItem("storyList") || "[]")
  );
  const navigate = useNavigate();
  const todoList = JSON.parse(localStorage.getItem("todoList") || "[]");

  const readMoreHandler = (todoListTitle: string) => {
    const checkTitle = todoList.filter(
      (todo: any) => todo.title  == todoListTitle
    );

    // console.log(checkTitle)
    // console.log(todoListTitle)
    if (checkTitle) {
      setReadMore(true);
    }

    return checkTitle;
  };
  return (
    <main>
      {storyModal ? (
        <CreateStoryModal
          setStoryModal={setStoryModal}
          storyModal={storyModal}
          storyList={storyList}
          setStoryList={setStoryList}
        />
      ) : null}
      <div className="story_flex">
        <Sidebar />
        <div className="storyBoard-block">
          <Navbar />

          <div className="story-header">
            <div className="storyBoard-title">Stories </div>

            <button
              className="btn primaryBtn"
              onClick={() => setStoryModal(!storyModal)}
            >
              Create Story
            </button>

           
          </div>

          {/* ************************STORY *********** */}
          <div className="storyBoard-columnWrapper">
            <div className="storyBoard">
              <div className="storyBoard-column">
                <div className="head">
                  <span className="toggle-title">Features</span>
                  <div className="featureStatus-toggle">
                    <button type="button" className="epicStatus-title p">
                      Status
                    </button>
                    <div className="epicStatus p">
                      <span className="toggleCircle"></span>
                    </div>
                    <button type="button" className="epicStatus-title">
                      Estimate
                    </button>
                  </div>
                </div>
                <div className="epiccolumn">
                  <div className="epic">
                    <div className="  cursorPointer">
                      <div className="maincard-Top">
                        <div className="epic-details">
                          
                          <div className="title">
                            <ul className="">
                              {storyList.map((story: any) => {
                                return (
                                  <li
                                    key={story.title}
                                    className="epic-content "
                                  >
                                    <p className="title">{story.title}</p>
                                    
                                    <div className="greyText">
                                   <ReadMore desc={story.description} />
                                   </div>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* *****************TO DO **************** */}
              <div className="storyBoard-column">
                <div className="head">
                  <span className="toggle-title">To Do</span>
                </div>
                <div className="epiccolumn">
                  <div className="epic">
                    {/* <div className="cursorPointer">
                      <div className="maincard-Top"> */}
                        <div className="epic-details">
                          
                          <div className="title">
                            <ul className="todo_styling">
                              {todoList.map((todo: any) => {
                                return (
                                  <li
                                    key={todo.title}
                                    className="epic-content cursorPointer "
                                  >
                                    <p className="title">{todo.title}</p>
                                    <div className="greyText">
                                     
                                    <ReadMore desc={todo.description} />

                                    </div>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>

                          
                        </div>
                      {/* </div>
                    </div> */}
                  </div>
                </div>
              </div>
             {/* **************QA********* */}
              <div className="storyBoard-column">
                <div className="head">
                  <span className="toggle-title">QA</span>
                </div>
              </div>

             {/* **************REJECTED********* */}

              <div className="storyBoard-column">
                <div className="head">
                  <span className="toggle-title">Rejected</span>
                </div>
              </div>
              {/* **************ACCEPTED************* */}
              <div className="storyBoard-column">
                <div className="head">
                  <span className="toggle-title">Accepted</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Stories;
