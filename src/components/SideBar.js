import React from 'react'
import "./SideBar.css"
 
import  {SideBarData} from "./SideBarData" 

function SideBar() {
  return (
    <div className='SideBar'>
     <ul className="SideBarList">   
     {SideBarData.map((val,key)=>{
       return(
         <li key={key}  
           className="line">
           <div id="icon">{val.icon}</div>
           <div id="title">{val.title}</div>

         </li>
       );
     })}
     </ul>
    </div>
  )
}

export default SideBar;
