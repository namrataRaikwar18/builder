import React from "react";
import { ArticleCard } from "../../components/Cards/Cards";
import { useNavigate } from "react-router-dom";
import { PNG } from "../../Assets";

import "./Home.css";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/Navbar/Navbar";

type DESC = {
  description: string;
  img: string;
  stories: any;
};
export const ArticleSection = ({ description, img, stories }: DESC) => {
  const navigate = useNavigate();

  return (
    <div className="cardDiv">
      <ArticleCard hoverable onClick={() => navigate("/projects")}>
        <div className="cardImg">
          <img src={img} alt="" />
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
  return (
    <div className="homeDiv">
      <div>
        <Sidebar />
      </div>
      <div className="homePage">
        <Navbar />
        <div className="grid-container1">
          <div className="grid-item1" data-testid='CarShipapp'>
            <ArticleSection
              description={" CarShip.app"}
              stories={"486 Total Stories"}
              img={PNG.VUE}
              // onClick={()=>navigate("/detail")}
            />
          </div>
          <div className="grid-item1">
            <ArticleSection
              description={"PEPtlk"}
              stories={"556 Total Stories"}
              img={PNG.VUE}
              //   icon={PNG.AUTHOR}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
