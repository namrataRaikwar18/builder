import React from "react";
import { ArticleCard } from "../../components/Cards/Cards";
import { useNavigate } from "react-router-dom";
import { PNG } from "../../Assets";
import "./Home.css";
import { Sidebar } from "../../components/sidebar/Sidebar";

type DESC = {
  description: string;
  img: string;
  stories: any;
};


const projectData = [{id:"123", description:'CarShip.app',stories:"556 Total Stories"}, {id:"456", description:'PEPtlk',stories:"556 Total Stories"}]

export const ArticleSection = ({ description, img, stories }: DESC) => {

  return (
    <div className="cardDiv">
      <ArticleCard hoverable >
        <div className="cardImg">
          <img src={img} alt="logo" />
        </div>
        <div className="cardDesc">
          <div>
            <p className="avatar">A</p>
          </div>
          <div className="cardNameWithDivider">
            <p className="divider"></p>
            <div className="cardName">{description}</div>
          </div>
          <div className="greyText">{stories}</div>
        </div>
      </ArticleCard>
    </div>
  );
};

const Home = () => {

const navigate = useNavigate();

  return (
    <div className="homeDiv">
      <div>
        <Sidebar />
      </div>
      <div className="homePage">
        <ul className="grid-container1 list">
         {projectData.map(({id, description, stories}) => {
            return(
              <li className="grid-item1" data-testid='project' key={id} onClick={() => navigate(`/projects/${id}`)}>
              <ArticleSection
              description={description}
              stories={stories}
              img={PNG.VUE}
              />
            </li>
              )
            })
          }
          {/* <div className="grid-item1">
            <ArticleSection
              description={"PEPtlk"}
              stories={"556 Total Stories"}
              img={PNG.VUE}
              //   icon={PNG.AUTHOR}
            />
          </div> */}
        </ul>
      </div>
    </div>
  );
};

export {Home, projectData};
