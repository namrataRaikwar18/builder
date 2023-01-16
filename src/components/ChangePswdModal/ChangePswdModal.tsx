import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

type ChangePswdModalProps = {
  chngPswdModal: boolean;
  setChngPswdModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChangePswdModal = ({
  chngPswdModal,
  setChngPswdModal,
}: ChangePswdModalProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const closeModalHandler = () => {
    setChngPswdModal(!chngPswdModal);
  };

  return (
    <main
      className="chPswdModalMain"
      data-testid="chPswdModalMain"
      onClick={closeModalHandler}
    >
      <div
        className="chPswdModal"
        data-testid="chPswdModal"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Change Password</h3>
        <label className="modalLabel" htmlFor="">
          <span>New Password</span>
          <div className="eyeIconInput">
            <input
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              className="modalInput"
            />
            {showPassword ? (
              <p
                className="eyeIcon"
                data-testid="showEyeIconTestid"
                onClick={() => setShowPassword(!showPassword)}
              >
                <AiFillEye />
              </p>
            ) : (
              <p
                className="eyeIcon"
                data-testid="closeEyeIconTestId"
                onClick={() => setShowPassword(!showPassword)}
              >
                <AiFillEyeInvisible />
              </p>
            )}
          </div>
        </label>
        <label className="modalLabel" htmlFor="">
          <span data-testid="repeatpswdtestid">Repeat Password</span>
          <input
            placeholder="Repeat Password"
            type={showPassword ? "text" : "password"}
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
