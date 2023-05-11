import React from "react";
import "./createstorymodal.css";
type StoryDetailType = {
  title: string;
  description: string;
};
type CreateStoryModalType = {
  storyModal: boolean;
  setStoryModal: React.Dispatch<React.SetStateAction<boolean>>;
  postStoryData: () => void;
  storyDetail: StoryDetailType;
  setStoryDetail: React.Dispatch<React.SetStateAction<StoryDetailType>>;
};
const CreateStoryModal = ({
  setStoryModal,
  postStoryData,
  storyDetail,
  setStoryDetail,
}: CreateStoryModalType) => {
  //using localStorage
  // const createStoryHandler = () => {
  //   if(title == '' || description=="" && title==' ' || description==' '){
  //     toast.error('please fill the fields!')
  //   }else{
  //     storyList.push(storyDetail);
  //     setStoryList([...storyList]);
  //     setStoryDetail({ title: "", description: ""});
  //     localStorage.setItem("storyList", JSON.stringify(storyList));
  //     setStoryModal(false);
  //   }
  // };
  return (
    <main
      className="chPswdModalMain storyPswdMain"
      onClick={() => setStoryModal(false)}
    >
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
        <button className="btn primaryBtn" onClick={() => postStoryData()}>
          Create
        </button>
      </div>
    </main>
  );
};
export { CreateStoryModal };