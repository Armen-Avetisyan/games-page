import React  from "react";


import "./header-home-page.css";
import logoImg from "./img-logo/Group.svg";


export  function  Header(){






    return(
        
        
       <div className = "headerPage">
         <div className="wraper-header">
     <a href = "http://localhost:3000/">  <img
        className="logo-image"
        src={logoImg}
        alt="logo"
      /> </a>
             </div>
       </div>
      
       
    )
}




