import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PNG } from "../../Assets";
import "./Home.css";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { getTodoList } from "../../pages/Admin/Admin";

type DESC = {
  description: string;
  img: string;
  stories: any;
};

type EachProjectType = {
  id: string;
  description: string;
  stories: string;
};

const projectData: EachProjectType[] = [
  { id: "123", description: "CarShip.app", stories: "556 Total Stories" },
  { id: "456", description: "PEPtlk", stories: "556 Total Stories" },
];

export const ArticleSection = ({ description, img, stories }: DESC) => {
  return (
    <div className="cursorPointer">
      <div className="cardImg">
        <img src={img} alt="logo" />
      </div>

      <div className="cardDiv">
        <p className="avatar">A</p>
        <div className="cardNameWithDivider">
          <p className="divider"></p>
          <div className="cardName">{description}</div>
          <div className="greyText cardName ">{stories}</div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <div className="homeDiv">
      <div>
        <Sidebar />
      </div>
      <div className="homePage">
        <ul className="grid-container1 list">
          {projectData.map(({ id, description, stories }) => {
            return (
              <li
                className="grid-item1"
                data-testid="project"
                key={id}
                onClick={() => navigate(`/projects/${id}`)}
              >
                <ArticleSection
                  description={description}
                  stories={stories}
                  img={PNG.VUE}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export { Home, projectData };
