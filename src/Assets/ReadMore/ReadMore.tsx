import React,{useState} from 'react';
import "./Readmore.css";
function ReadMore() {
  const [readMore,setReadMore]=useState(false);
  const extraContent=<div className="head-content" >
      <p className="extra-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab 
        porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
        commodi officia aliquam! Maxime.
      </p>
  </div>
  const linkName=readMore?'Read Less<< ':' Lorem ipsum dolor sit .... more '
  return (
    <div className="App head-content">
      <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
      {readMore && extraContent}
    </div>
  );
}

export default ReadMore;