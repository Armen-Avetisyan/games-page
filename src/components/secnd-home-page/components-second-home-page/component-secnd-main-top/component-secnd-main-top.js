import React, { useEffect, useState }  from "react";
import { useParams } from "react-router";
import "./component-secnd-main-top.css";


import {TicTacToe} from "../../../components-games/games-first/game-TicTacToe/gameTic-Tac-Toe"

import { RockPaperScissors } from "../../../components-games/games-first/game-rockPaperScissors/gameRock-Paper-Scissors";
import { MemoryPokemon } from "../../../components-games/games-first/gameMemoryPokemon/gameMemory-Pokemon";
import SnakeComponent from "../../../components-games/games-second/game-Snake/gameSnake";

 export function SecondMainTop(){

       let params = useParams();
      //   console.log(params);
   let game;
    
   switch (params.uid){
       case "1" : game =  <TicTacToe/> ;
       break;
       case "2" : game =  <RockPaperScissors/>
       break;
       case "3" : game = <MemoryPokemon/>
       break;
       case "4" : game = <SnakeComponent/>
       break;
    }

// console.log(id);
   
    return(
      
       <div className = "secnd-main-top">
        {/* <TicTacToe/> */}
        {game}
      
       </div>
      
    )

};
