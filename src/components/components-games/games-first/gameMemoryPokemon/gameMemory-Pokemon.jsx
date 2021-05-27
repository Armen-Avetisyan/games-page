import React, { useEffect, useState } from "react";
import "./gameMemory-Pokemon.css";

const url = "https://pokeres.bastionbot.org/images/pokemon";

export  function MemoryPokemon() {
  // pairOfPokemons -  arr-i indexner@  arri mej
  const [openedCard, setOpenedCard] = useState([]);
  // pairOfPokemons - i id-ner   arri mej
  const [matched, setMatched] = useState([]);

  const pokemons = [
    { id: 1, name: "balbasaur" },
    { id: 8, name: "wartotle" },
    { id: 9, name: "blastoise" },
    { id: 6, name: "charizard" },
    // { id: 7, name: "squirtle"  },
    // { id: 3, name: "name"  }
  ];

  //currently there are 4 pokemons but we need the pair

  const pairOfPokemons = [...pokemons, ...pokemons];

  function flipCard(index) {
    setOpenedCard((opened) => [...opened, index]);
  }

  useEffect(() => {
    if (openedCard < 2) return;

    const firstMatched = pairOfPokemons[openedCard[0]];
    const secondMatched = pairOfPokemons[openedCard[1]];

    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatched([...matched, firstMatched.id]);
    }

    if (openedCard.length === 2) setTimeout(() => setOpenedCard([]), 1000);
  }, [openedCard]);

  return (
      <>
      <h1 className="pokemonHeader" >gameMemory-Pokemon</h1>
    <div className="wrappwe-pakemon">
      
      <div className="cards">
        {pairOfPokemons.map((pokemon, index) => {
          //lets flip the card
          let isFlipped = false;

          if (openedCard.includes(index)) isFlipped = true;
          if (matched.includes(pokemon.id)) isFlipped = true;
          return (
            <div
              className={`pokemon-card ${isFlipped ? "flipped" : ""} `}
              key={index}
              onClick={() => flipCard(index)}
            >
              <div className="inner">
                <div className="front">
                  <img
                    src={`${url}/${pokemon.id}.png`}
                    alt="pokemon-name"
                    width="100"
                  />
                </div>
                <div className="back"></div>
              </div>
            </div>
          );
        })}
      </div>
     
    </div> 
    <button className="pokemonRefreshBtn" onClick = {()=>{setOpenedCard([]);setMatched([]) }} > Refresh </button>
    </>
  );
}
