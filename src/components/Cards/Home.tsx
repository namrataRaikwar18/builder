import React from 'react'
import { ArticleCard } from './Cards';
import { useNavigate } from 'react-router-dom';
import { PNG } from '../../Assets';

import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Sidebar } from '../sidebar/Sidebar';
type DESC ={
    description: string,
    img:string,
    stories : any,
}
export const ArticleSection = ({ description, img, stories}:DESC) => {

  const navigate = useNavigate();
 
  return (
    <div>
      <div>
        <ArticleCard hoverable onClick={()=>navigate("/detail")}  >
            <div style={{ height:"200px",marginLeft:"100px", marginTop: "50px",borderRadius:"20px",borderColor:"solid red",
width:"20px"}}>

          <img src={img} alt=""  />
            </div>
            <div style={{marginTop: "40%",}}>

            <div > 
                <p className="avatar">A</p>
            </div>
          <div
            style={{
              color: "#2B2C34",
              fontWeight: "700",
              fontSize: "20px",
              fontFamily: "Plus Jakarta Sans",
              display:"flex",
              justifyContent:"left"
            }}
          >
            {description}
          </div>
          <div
            style={{
              marginTop: "2%",
              color: "grey",
              fontWeight: "700",
              fontSize: "10px",
              fontFamily: "Plus Jakarta Sans",
              display:'flex',
              alignItems:"center",
              
            }}
          >
            {stories}
          </div>
            </div>
          
        </ArticleCard>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div style={{display:'flex'}}>
        <div>
            <Sidebar />
        </div>
        <div>

      <div className="grid-container1">
          <div className="grid-item1">
            <ArticleSection
              description={" CarShip.app"}
              stories= {'486 Total Stories'}
              img={PNG.VUE}

                // onClick={()=>navigate("/detail")}
            />
          </div>
          <div className="grid-item1">
            <ArticleSection
              description={"PEPtlk"}
              stories= {'556 Total Stories'}

              img={PNG.VUE}
            //   icon={PNG.AUTHOR}
            />
          </div>
          
          
        </div>
        </div>
    </div>
  )
}

export default Home
