import React, {useRef} from "react";
import "./login.css";
// interface Props {
//   handleAdd : (e: React.FormEvent) => void;
//   setDetail:React.Dispatch<React.SetStateAction<string >>;
  
// }


// const App: React.FC<Props> = (setDetail,handleAdd) => {
 const Login = () =>{
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    // <form className="Head" onSubmit={(e)=> {handleAdd(e); inputRef.current?.blur() }}>
    <form className="Head" >

        <h1>SignIn</h1>
      
        <h2>Sign In to tracker App</h2>
      <div>
        <div>
          <h3>Email:</h3>

          <input
          ref ={inputRef}
            type="email"
            placeholder="Enter Your Email"
            value=""
            className="input__box"
            id="email"
          />
        </div>
        <div>
          <h3>Password:</h3>

          <input
            type="password"
            placeholder="Enter Your Password"
            value=""
            className="input__box"
          />
        </div>
        <div >
          <button  className="input_submit" type="submit" > Sign In</button>
        </div>
      </div>
    </form>
  );
};

export default Login;
