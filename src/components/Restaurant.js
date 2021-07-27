import React,{useState} from 'react'
import Navabar from './Navabar';
import Menucard from './Menucard'
import Menu from './Menuapi'
 
const uniqueList = [...new Set(Menu.map((currEle)=>{
    return currEle.category;
})
),"All"]
console.log(uniqueList);
const Restaurant =()=> {
    const [menudata,setMenudata] =useState(Menu);
    // const [uniqueCat,setuniqueCat] =useState(uniqueList)
    const filterItem=(category)=>{
            if(category==="All"){
             setMenudata(Menu);
             return;
            } 
            const upDatelist= Menu.filter((item)=>{
           return (item.category===category)
        });
    setMenudata(upDatelist);
    }
   
    return (
       <>
       <Navabar filterItem={filterItem} uniqueList={uniqueList}/>
       <Menucard menudata={menudata}/>
       </>
    )
}

export default Restaurant;
