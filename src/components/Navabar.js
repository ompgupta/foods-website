import React from 'react'

const Navabar = ({filterItem,uniqueList}) =>{
    return (
       <>
       <div className="main-container" style={{backgroundImage:`url(./images/background.jpg)`}}>
         <div className="nav-menu">
          {
            uniqueList.map((currEle)=>{
              return <button className="nav-btn" onClick={()=>filterItem(currEle)}>{currEle}</button>
            })
          }
            
         </div>
         <div className="nav-header">
         <h1>Welcome to  <br /><span>Yummy Foods</span></h1>
         <button className="order-food">Order Online</button>
       </div>
       </div>
       </>
    )
}

export default Navabar
