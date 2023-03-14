import { Grid } from "antd";
import React from "react";
import Progress_bar from "../../Assets/Progress_Bar/Progress_bar";
import ReadMore from "../../Assets/ReadMore/ReadMore";
import "./Stories.css";
import { Switch } from "antd";
import { Progress } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined, FilterOutlined, InfoCircleOutlined, SearchOutlined } from "@ant-design/icons";
import {GoTasklist} from "react-icons/go";
import { Sidebar } from "../sidebar/Sidebar";
type property = {
  height: number;
  bgcolor: any;
  progress: any;
};
const Stories = () => {
  return (
<div style={{display:"flex"}}>
  <div>
   <Sidebar />
    </div>
    <div className="storyBoard-block">
      <div className="flex">
      <div className="storyBoard-title">
        Stories
        </div>
        <div className="storyBoardSearch input ">
          <div className="searchArea-block">
          <SearchOutlined className="searchArea-blocks"/>
          </div>
        </div>
        <div className="trackedHour-info">
        <span className="iconb-info"><FilterOutlined /></span>
        <span className="trackedHour-detail"> 4 Filters</span>
        </div>
        <div className="trackedHour-info">
        <span className="iconb-info"><ArrowLeftOutlined /></span><span className="iconb-info"><ArrowRightOutlined /></span>
        <span className="trackedHour-detail">7 Views</span>
        </div>
        <div className="trackedHour-info">
        <span className="trackedHour-detail">275:41:46</span>
        <span className="iconb-info"><InfoCircleOutlined /></span>
        </div>
        <div className="trackedHour-info">
        <span className="trackedHour-detail">169:07:46</span>
        <span className="iconb-info"><InfoCircleOutlined /></span>
        </div>
        <a className="ideButton input" href="">
        <GoTasklist /> Go to Buildcard IDE
        </a>
      </div>
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
                <div className="epic-content cursorPointer">
                  <div className="maincard-Top">
                    <div className="featureStatus ongoing_customisation">
                      <span className="featureState-name">
                        Ongoing Customization
                      </span>
                    </div>
                    <div className="epic-details">
                      <div className="title">Admin Console</div>
                      {/* <div className="briefDescription">
                  <span className="briefDescription">
                  Upload multiple files to the product.Saves users time compared to uploading one file at a time.
                  </span>
                  <span className="moreOption">more</span>
                </div> */}
                      <ReadMore />
                      <div>
                        <Progress percent={35} strokeColor="#35C83B" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="epic">
                <div className="epic-content cursorPointer">
                  <div className="maincard-Top">
                    <div className="featureStatus ongoing_customisation">
                      <span className="featureState-name">
                        Ongoing Customization
                      </span>
                    </div>
                    <div className="epic-details">
                      <div className="title">Bulk Uplpoading</div>
                      {/* <div className="briefDescription">
                  <span className="briefDescription">
                  Upload multiple files to the product.Saves users time compared to uploading one file at a time.
                  </span>
                  <span className="moreOption">more</span>
                </div> */}
                      <ReadMore />
                      <div>
                        <Progress percent={90} strokeColor="#35C83B" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="epic">
                <div className="epic-content cursorPointer">
                  <div className="maincard-Top">
                    <div className="featureStatus ongoing_customisation">
                      <span className="featureState-name">
                        Ongoing Customization
                      </span>
                    </div>
                    <div className="epic-details">
                      <div className="title">Bulk Uplpoading</div>
                      {/* <div className="briefDescription">
                  <span className="briefDescription">
                  Upload multiple files to the product.Saves users time compared to uploading one file at a time.
                  </span>
                  <span className="moreOption">more</span>
                </div> */}
                      <ReadMore />
                      <div>
                        <Progress percent={90} strokeColor="#35C83B" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="storyBoard-column">
            <div className="head">
              <span className="toggle-title">To Do</span>
            </div>
            <div className="epiccolumn">
            <div className="epic">
                <div className="epic-content cursorPointer">
                  <div className="maincard-Top">
                    <div className="featureStatus ongoing_customisation">
                      <span className="featureState-name">
                        Ongoing Customization
                      </span>
                    </div>
                    <div className="epic-details">
                      <div className="title">Bulk Uplpoading</div>
                      {/* <div className="briefDescription">
                  <span className="briefDescription">
                  Upload multiple files to the product.Saves users time compared to uploading one file at a time.
                  </span>
                  <span className="moreOption">more</span>
                </div> */}
                      <ReadMore />
                      <div>
                        <Progress percent={90} strokeColor="#35C83B" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="epic">
                <div className="epic-content cursorPointer">
                  <div className="maincard-Top">
                    <div className="featureStatus ongoing_customisation">
                      <span className="featureState-name">
                        Ongoing Customization
                      </span>
                    </div>
                    <div className="epic-details">
                      <div className="title">Bulk Uplpoading</div>
                      {/* <div className="briefDescription">
                  <span className="briefDescription">
                  Upload multiple files to the product.Saves users time compared to uploading one file at a time.
                  </span>
                  <span className="moreOption">more</span>
                </div> */}
                      <ReadMore />
                      <div>
                        <Progress percent={90} strokeColor="#35C83B" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="storyBoard-column">
            <div className="head">
              <span className="toggle-title">In Progress</span>
            </div>
            <div className="epiccolumn">
              <div className="epic">
                <div className="epic-content cursorPointer">
                  <div className="maincard-Top">
                    <div className="featureStatus ongoing_customisation">
                      <span className="featureState-name">
                        Ongoing Customization
                      </span>
                    </div>
                    <div className="epic-details">
                      <div className="title">Admin Console</div>
                      <div className="briefDescription">
                        <span className="briefDescription">
                          Upload multiple files to the product.Saves users time
                          compared to uploading one file at a time.
                        </span>
                        <span className="moreOption">more</span>
                      </div>
                      <div>
                        <Progress />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="storyBoard-column">
            <div className="head">
              <span className="toggle-title">QA</span>
            </div>
          </div>
          <div className="storyBoard-column">
            <div className="head">
              <span className="toggle-title">Rejected</span>
            </div>
          </div>
          <div className="storyBoard-column">
            <div className="head">
              <span className="toggle-title">Accepted</span>
            </div>
          </div>
          <div className="storyBoard-column">
            <div className="head">
              <span className="toggle-title">Archieve</span>
            </div>
            <div className="epiccolumn">
            <div className="epic">
                <div className="epic-content cursorPointer">
                  <div className="maincard-Top">
                    <div className="featureStatus ongoing_customisation">
                      <span className="featureState-name">
                        Ongoing Customization
                      </span>
                    </div>
                    <div className="epic-details">
                      <div className="title">Bulk Uplpoading</div>
                      {/* <div className="briefDescription">
                  <span className="briefDescription">
                  Upload multiple files to the product.Saves users time compared to uploading one file at a time.
                  </span>
                  <span className="moreOption">more</span>
                </div> */}
                      <ReadMore />
                      <div>
                        <Progress percent={90} strokeColor="#35C83B" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="epic">
                <div className="epic-content cursorPointer">
                  <div className="maincard-Top">
                    <div className="featureStatus ongoing_customisation">
                      <span className="featureState-name">
                        Ongoing Customization
                      </span>
                    </div>
                    <div className="epic-details">
                      <div className="title">Bulk Uplpoading</div>
                      {/* <div className="briefDescription">
                  <span className="briefDescription">
                  Upload multiple files to the product.Saves users time compared to uploading one file at a time.
                  </span>
                  <span className="moreOption">more</span>
                </div> */}
                      <ReadMore />
                      <div>
                        <Progress percent={90} strokeColor="#35C83B" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="epic">
                <div className="epic-content cursorPointer">
                  <div className="maincard-Top">
                    <div className="featureStatus ongoing_customisation">
                      <span className="featureState-name">
                        Ongoing Customization
                      </span>
                    </div>
                    <div className="epic-details">
                      <div className="title">Bulk Uplpoading</div>
                      {/* <div className="briefDescription">
                  <span className="briefDescription">
                  Upload multiple files to the product.Saves users time compared to uploading one file at a time.
                  </span>
                  <span className="moreOption">more</span>
                </div> */}
                      <ReadMore />
                      <div>
                        <Progress percent={90} strokeColor="#35C83B" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};
export default Stories;