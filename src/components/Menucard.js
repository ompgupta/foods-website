import React, { useState } from 'react'
const Menucard=({menudata})=> {
    return (
        <> 
        <div className="card-conatiner">
        {
            menudata.map((curr)=>{
                const{id,category,name,description} = curr; //object destrcturings
                return <div className="card-body">
                     <p className="number-round">{id}</p>
                     <p className="title">{category}</p>
                     <h3 className="menu-name">{name}</h3>
                     <span className="description">{description}</span>
                         <div className="more">Read</div>
                         <img src={curr.image} alt="" />
                         <br />
                        <button className="order-btn">Order Now</button>
                 </div>
            })
        }
                 
             </div>
             
        </>
    )
}

export default Menucard
