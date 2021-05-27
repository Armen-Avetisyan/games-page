import "./App.css";
import React from "react";
// import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import { Home } from "./components/home-page/home-page";
import { TicTacToe } from "./components/components-games/games-first/game-TicTacToe/gameTic-Tac-Toe";
import { RockPaperScissors } from "./components/components-games/games-first/game-rockPaperScissors/gameRock-Paper-Scissors";
import { MemoryPokemon } from "./components/components-games/games-first/gameMemoryPokemon/gameMemory-Pokemon";
import { SecndPage } from "./components/secnd-home-page/secnd-home-page";
import { Header } from "./components/home-page-components/header-page/header-home-page";
import { BrowserRouter,Route } from "react-router-dom";
import { Footer } from "./components/home-page-components/foooter-component/footer-home";
import { Baner } from "./components/home-page-components/banner-component/banner";
import { MainHome } from "./components/home-page-components/main-home-component/main-home";




  
function App() {
 
  return (
    <BrowserRouter>
    <div  className="global-box">
    {/* <TicTacToe/> 
      <hr/> */}
    {/* <RockPaperScissors/>
    <hr/> */}
    {/* <MemoryPokemon/> */}
  
{/* <Home/> */}

{/* <SecndPage/> */}
   <Header/>
   <Baner/>
   {/* <MainHome/> */}
   
<Route exact path="/" component={MainHome}/>
<Route  path="/play-game/:uid" component={SecndPage}/>

   <Footer/>
    </div>
   </BrowserRouter>
  );
}
;
export default App;
