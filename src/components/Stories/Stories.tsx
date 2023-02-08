// import { Grid } from "antd";
import React from "react";
import Progress_bar from "../../Assets/Progress_Bar/Progress_bar";
import ReadMore from "../../Assets/ReadMore/ReadMore";
import "./Stories.css";
type property = {
  height: number;
  bgcolor: any;
  progress: any;
};

const Stories = ({ bgcolor, height, progress }: property) => {
  return (
    <div className="container">
      <div
        style={{
          width: "500px",
          height: "auto",
          margin: "5px",
          padding: "5px",
          backgroundColor: "grey",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>Features</div>
          <div style={{ display: "flex" }}>
            <div>Stories </div>
            <div style={{ paddingLeft: "5px" }}>Estimate</div>
          </div>
        </div>
        <div className="box1">
          <div className="circle">
            <h6 id="content">cursor customibation</h6>
          </div>

          <h5 style={{ marginTop: "20px" }}>Admin Console</h5>
          <ReadMore />
        </div>
        <div className="box1">
          <div className="circle"></div>
          <h5 style={{ marginTop: "20px" }}>Admin Console</h5>
          <ReadMore />
          <Progress_bar bgcolor={"black"} progress={30} height={30} />
        </div>
        <div className="box1">
          <div className="circle"></div>
          <h5 style={{ marginTop: "20px" }}>Admin Console</h5>
        </div>{" "}
        <div className="box1">
          <div className="circle"></div>
          <h5 style={{ marginTop: "20px" }}>Admin Console</h5>
        </div>
        <div className="box1">
          <div className="circle"></div>
          <h5 style={{ marginTop: "20px" }}>Admin Console</h5>
        </div>{" "}
        <div className="box1">
          <div className="circle"></div>
          <h5 style={{ marginTop: "20px" }}>Admin Console</h5>
        </div>{" "}
        <div className="box1">
          <div className="circle"></div>
          <h5 style={{ marginTop: "20px" }}>Admin Console</h5>
        </div>
      </div>

      <div className="box">TO DO</div>
      <div className="box">In progress</div>
      <div className="box">QA</div>
      <div className="box">Rejected</div>
      <div className="box">Accepted</div>
      <div className="box">Archieved</div>
    </div>
  );
};

export default Stories;
