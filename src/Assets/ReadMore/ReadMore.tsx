import React,{useState} from 'react';

function ReadMore() {
  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
      <p className="extra-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab 
        porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
        commodi officia aliquam! Maxime.
      </p>
  </div>
  const linkName=readMore?'Read Less << ':' Lorem ipsum dolor sit amet consectetur.... more '
  return (
    <div className="App">
      <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h4>{linkName}</h4></a>
      {readMore && extraContent}
    </div>
  );
}

export default ReadMore;