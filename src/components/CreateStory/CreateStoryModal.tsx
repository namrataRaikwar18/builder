import React, { useState } from "react";
import { toast } from "react-hot-toast";

import "./createstorymodal.css";
import { useNavigate } from "react-router";

type CreateStoryModalType = {
  storyModal: boolean,
  setStoryModal: React.Dispatch<React.SetStateAction<boolean>>,
  storyList: object[];
  setStoryList: React.Dispatch<React.SetStateAction<object[]>>,
}

type StoryDetailType = {
  title: string;
  description: string;
};




const CreateStoryModal = ({storyModal,setStoryModal,setStoryList,storyList}:CreateStoryModalType) => {

  const [storyDetail, setStoryDetail] = useState({
    title: "",
    description: "",
   
  });

  const {title, description} = storyDetail;

  const createStoryHandler = () => {
    if(title == '' || description=="" && title==' ' || description==' '){
      toast.error('please fill the fields!')
    }else{
      storyList.push(storyDetail);
      setStoryList([...storyList]);
      setStoryDetail({ title: "", description: ""});
      localStorage.setItem("storyList", JSON.stringify(storyList));
      setStoryModal(false);
    }
  };
  const navigate = useNavigate();

  return (
    
        <main className="chPswdModalMain storyPswdMain" onClick={()=>setStoryModal(false)}>
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
              setStoryDetail({ ...storyDetail, title: e.target.value })
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
              setStoryDetail({ ...storyDetail, description: e.target.value })
            }
          ></textarea>
        </label>
        <button className="btn primaryBtn" onClick={()=>createStoryHandler()}>
          Create
        </button>
      </div>
    </main>
        
     
  );
};

export  {CreateStoryModal} ;
