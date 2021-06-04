import React  from "react";
import "./main-home.css";
import {BrowserRouter as Router, Switch, Route, Link, NavLink, useParams} from "react-router-dom";
import gameLogo1 from "./imgs/Group111.png";
export function MainHome(){



  let {uid} = useParams();
      console.log(uid);


return(
<div className = "main-box">
      <div className=" wrapper-main">
      {/* <div className="gane-image-blok"><img className="games-img" src = {gameLogo1} alt = "  game " />  </div>
      <div className="gane-image-blok"><img className="games-img" src = {gameLogo1} alt = "  game " />  </div>
      <div className="gane-image-blok"><img className="games-img" src = {gameLogo1} alt = "  game " />  </div>
      <div className="gane-image-blok"><img className="games-img" src = {gameLogo1} alt = "  game " />  </div>
      <div className="gane-image-blok"><img className="games-img" src = {gameLogo1} alt = "  game " />  </div>
      <div className="gane-image-blok"><img className="games-img" src = {gameLogo1} alt = "  game " />  </div>
      <div className="gane-image-blok"><img className="games-img" src = {gameLogo1} alt = "  game " />  </div>
      <div className="gane-image-blok"><img className="games-img" src = {gameLogo1} alt = "  game " />  </div>
      <div className="gane-image-blok"><img className="games-img" src = {gameLogo1} alt = "  game " />  </div> */}

   
      <NavLink  to="/play-game/1"> <img className="games-img" src = {gameLogo1} alt = "game "/> </NavLink>
      <NavLink to="/play-game/2"> <img className="games-img" src = {gameLogo1} alt = "game "/> </NavLink>
      <NavLink  to="/play-game/3"> <img className="games-img" src = {gameLogo1} alt = " game "/> </NavLink> 
      <NavLink  to="/play-game/4"> <img className="games-img" src = {gameLogo1} alt = "game "/> </NavLink>
      <img className="games-img" src = {gameLogo1} alt = "  game " /> 
      <img className="games-img" src = {gameLogo1} alt = "  game " /> 
      <img className="games-img" src = {gameLogo1} alt = "  game " /> 
      <img className="games-img" src = {gameLogo1} alt = "  game " /> 
      <img className="games-img" src = {gameLogo1} alt = "  game " /> 

     </div>
</div>

)
}