import React from 'react'
  type property = {
       height?: number,
       bgcolor?: any,
       progress?: any,
  }
const Progress_bar = ({bgcolor,progress,height}:property) => {
     
    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 50
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:40,
        textAlign: 'right'
      }
      
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
      }
        
    return (
    <div className='Parentdiv'>
      <div className='Childdiv'>
        <span className='progresstext'>{`${progress}%`}</span>
      </div>
    </div>
    )
}
  
export default Progress_bar;