import React  from "react";
import "./main-home.css";
import {BrowserRouter as Router, Switch, Route, Link, NavLink, useParams} from "react-router-dom";
import gameLogo1 from "./imgs/Group111.png";
import x_o from "./imgs/x-o.png";
import rpck from "./imgs/rock.jpg";
import pokemons from "./imgs/pokemons.jpg";
import snake from "./imgs/snake.jpg"
export function MainHome(){



  let {uid} = useParams();
      console.log(uid);


return(
<div className = "main-box">
      <div className=" wrapper-main">
     

   
      <NavLink  to="/play-game/1"> <img className="games-img" src = {x_o} alt = "game "/> </NavLink>
      <NavLink to="/play-game/2"> <img className="games-img" src = {rpck} alt = "game "/> </NavLink>
      <NavLink  to="/play-game/3"> <img className="games-img" src = {pokemons} alt = " game "/> </NavLink> 
      <NavLink  to="/play-game/4"> <img className="games-img" src = {snake} alt = "game "/> </NavLink>
      <img className="games-img" src = {gameLogo1} alt = "  game " /> 
      <img className="games-img" src = {gameLogo1} alt = "  game " /> 
      <img className="games-img" src = {gameLogo1} alt = "  game " /> 
      <img className="games-img" src = {gameLogo1} alt = "  game " /> 
      <img className="games-img" src = {gameLogo1} alt = "  game " /> 

     </div>
</div>

)
}