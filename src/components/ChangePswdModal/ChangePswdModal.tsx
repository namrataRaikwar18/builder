import React from "react";

type ChangePswdModalProps = {
  chngPswdModal: boolean;
  setChngPswdModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChangePswdModal = ({
  chngPswdModal,
  setChngPswdModal,
}: ChangePswdModalProps) => {
  const closeModalHandler = () => {
    setChngPswdModal(!chngPswdModal);
  };

  return (
    <main className="chPswdModalMain" onClick={closeModalHandler}>
      <div className="chPswdModal" onClick={(e) => e.stopPropagation()}>
        <h3>Change Password</h3>
        <label className="modalLabel" htmlFor="">
          <span>New Password</span>
          <input placeholder="Password" type="text" className="modalInput" />
        </label>
        <label className="modalLabel" htmlFor="">
          <span>Repeat Password</span>
          <input
            placeholder="Repeat Password"
            type="text"
            className="modalInput"
          />
        </label>
        <div className="btnDiv">
          <button
            onClick={closeModalHandler}
            className="btn modalBtn cancelBtn"
          >
            Cancel
          </button>
          <button className="editButton btn modalBtn">Update</button>
        </div>
      </div>
    </main>
  );
};

export { ChangePswdModal };
