import React, { useState, useEffect } from "react";
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
import axios from "axios";
import toast from "react-hot-toast";


const storyLocal:object[]= [];
export const getStoryList = async () => {
  try {
    const res = await axios.get(
      "https://builder-e72c1-default-rtdb.firebaseio.com/storyList.json"
    );
    const resData = res.data;
    console.log('getstory', res)
    storyLocal.push(...resData.storyList)
   localStorage.setItem("storyList", JSON.stringify(resData.storyList));
  } catch (error) {
    console.error(error);
  }
};


const Stories = () => {
  const [readMore, setReadMore] = useState(false);

  const [storyModal, setStoryModal] = useState<boolean>(false);
  const [storyDetail, setStoryDetail] = useState({
    title: "",
    description: "",
  });

  const { title, description } = storyDetail;


  const [storyList, setStoryList] = useState<object[]>([]);
  const navigate = useNavigate();
  const storyLocalStorage = JSON.parse(localStorage.getItem("storyList") || "[]");
  const todoList = JSON.parse(localStorage.getItem("todoList") || "[]");


  useEffect(() => {
    setStoryList(storyLocal)
    getStoryList()
  }, []);

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


  const postStoryData = async () => {
    if (title && description && title !== " " && description !== " ") {
      storyList.push(storyDetail);
      setStoryList([...storyList]);
      try {
        setStoryModal(false);
        const res = await axios.put(
          "https://builder-e72c1-default-rtdb.firebaseio.com/storyList.json",
          {
            storyList
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res,'storyData')
        setStoryDetail({ title: "", description: "" });
        localStorage.setItem("storyList", JSON.stringify(res.data.storyList));
      } catch (error: any) {
        console.error(error.message);
      }
    } else {
      toast.error("please fill the fields!");
    }
  };

  return (
    <main>
      {storyModal ? (
        <CreateStoryModal
          setStoryModal={setStoryModal}
          storyModal={storyModal}
          storyDetail={storyDetail}
        setStoryDetail={setStoryDetail}
          postStoryData={postStoryData}
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
                              {storyLocalStorage.map((story: any) => {
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
