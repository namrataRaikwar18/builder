// import React,{useState} from 'react';
// import "./Readmore.css";
// function ReadMore() {

//   const [readMore,setReadMore]=useState(false);
//   const extraContent=<div className="head-content" >
//       <p className="extra-content"  >
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab 
//         porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
//         commodi officia aliquam! Maxime.
//       </p>
//   </div>
//   const linkName=readMore?'Read Less<< ':' Lorem ipsum dolor sit .... more '
//   return (
//     <div className="App head-content">
//       <a className="read-more-link">{linkName}</a>
//       {readMore && extraContent}
//     </div>
//   );
// }

// export default ReadMore;


// import React,{useState} from 'react';

// type ReadMorePropsType ={
//   todoList: object[]
// }
// function ReadMore({todoList}:ReadMorePropsType) {
//   const [readMore,setReadMore]=useState(false);
//   const extraContent=<div>
//   </div>
//   // const linkName=todoList.description.length >= 10 ?`${todoList.description.substring(1,10)} ...read more` : 'Read Less'
//   return (
//     <div className="App">
//       <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h4>{
//         todoList.map((todo:any) => (
//           todo.description.length > 10 ?`${todo.description.substring(0,10)} ...read more` :` ${todo.description}'Read Less'`
//         ))
//         }</h4></a>
//       {readMore && extraContent}
//     </div>
//   );
// }
// export {ReadMore};


import React,{useState} from 'react';
import "./Readmore.css";

type ReadMorePropsType ={
    desc: string,
}

function ReadMore({desc}:ReadMorePropsType) {

  const [readMore,setReadMore]=useState(false);

  const extraContent=<div >
      
       
      {desc}

      
  </div>
  const linkName=readMore=== false?<div className='greyText'> {
    desc.substring(0,35)
    
  }{desc.length >=35?"...More": null}</div>: null
  return (
    <div onClick={()=>{setReadMore(!readMore)}}>
      <div className=" greyText " >{linkName}</div>
      {readMore && extraContent}
    </div>
  );
}

export  {ReadMore};