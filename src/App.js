import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Card from './components/Card'
import {makeCards, resetCards} from './actions/cards';
import {newGame} from './actions/gameResult';
import {resetPlayer1Score} from './actions/player1Score';
import {resetPlayer2Score} from './actions/player2Score';
import {resetChange} from './actions/change';
import {resetTurns} from './actions/turns';
import {addVictory1, resetVictory1} from './actions/victory1';
import {addVictory2, resetVictory2} from './actions/victory2';
import { resetWinner } from './actions/winner';

const Numbers = () =>{
  let numbers = []
  let id = 0;
  for (let i = 1; i < 13; i++) {
      id++;
      numbers.push({
      id: id,
      cardNumber: i,
      random: Math.random()
      });
      id++;
      numbers.push({
      id: id,
      cardNumber: i,
      random: Math.random()
      });
  }
  numbers.sort((a, b) => a.random - b.random);
  return numbers
}

function App(){
  const turns = useSelector(state => state.turns);
  const change = useSelector(state => state.change);
  const player1Score = useSelector(state => state.player1Score);
  const player2Score = useSelector(state => state.player2Score);
  const gameFinish = useSelector(state => state.gameResult);
  const victory1 = useSelector(state => state.victory1)
  const victory2 = useSelector(state => state.victory2)
  const theWinner = useSelector(state => state.winner)
  const dispatch = useDispatch();
  let cards = useSelector(state => state.cards)
  useEffect(() => {
    let numbers = Numbers()
    for(let i = 0; i <numbers.length; i++) {
        dispatch(makeCards(numbers[i].id, numbers[i].cardNumber));
    }
  },[])
  let numbers = cards
  let redWins = false;
  let blueWins = false;
  let tie = false
  if(gameFinish){
    if(gameFinish === 'red'){
      redWins = true
    }
    else if(gameFinish === 'blue'){
      blueWins = true
    }
    else{
      tie = true
    }
  }
  let redWinner = false;
  let blueWinner = false;
  if(theWinner){
    if(theWinner === 'red'){
      redWinner = true
    }
    else{
      blueWinner = true
    }
  }
  const reset = () => {
    if (gameFinish === "red") {
      dispatch(addVictory1());
    } else if (gameFinish === "blue") {
      dispatch(addVictory2());
    }
    dispatch(resetCards());
    dispatch(newGame());
    dispatch(resetPlayer1Score());
    dispatch(resetPlayer2Score());
    dispatch(resetChange());
    dispatch(resetTurns());
    let id = 0;
    numbers = Numbers()
    for(let i = 0; i <numbers.length; i++) {
      dispatch(makeCards(numbers[i].id, numbers[i].cardNumber));
    }
  }
  function resetGame(){
    dispatch(resetCards());
    dispatch(newGame());
    dispatch(resetPlayer1Score());
    dispatch(resetPlayer2Score());
    dispatch(resetChange());
    dispatch(resetTurns());
    dispatch(resetVictory1());
    dispatch(resetVictory2());
    dispatch(resetWinner())
    let id = 0;
    let numbers = Numbers()
    for(let i = 0; i <numbers.length; i++) {
      dispatch(makeCards(numbers[i].id, numbers[i].cardNumber));
    }
  }
  return(
    <div className="App">
    <div class="circle"></div>
    <h1>CONCENTRATION</h1>
    {!theWinner &&<div>
     {!gameFinish &&<div>
      <div class="victory1Container">
          {victory1.map(victory => (<div
            className="victory1"
            key={victory}
          ></div>))}
        </div>
        <div className="victory2Container">
          {victory2.map(victory => (<div
            className="victory2"
            key={victory}
          ></div>))}
        </div>
       <div className={!Boolean((turns+change) % 2) ? 'red bigger': 'red'} >{ player1Score }</div>
       <div className={Boolean((turns+change) % 2) ? 'blue bigger': 'blue'} >{ player2Score }</div>
       <div className="vs">VS</div>
       <div className="container">
       {numbers.map(number => (
        <Card
        id={number.id}
        key={number.id}
        ></Card>))}
       </div>
     </div>}
     {gameFinish &&<div>
       {redWins && <div className="redWins">Red Wins!</div>}
       {blueWins && <div className="blueWins">Blue Wins!</div>}
       {tie && <div className="tie">It's a Tie</div>}
       <button className="reset" onClick={reset}>New Round</button>
     </div>}
    </div>}
    {redWinner && <div className="redWinner">Red wins the Game</div>}
    {blueWinner && <div className="blueWinner">Blue wins the Game</div>}
    {theWinner && <button className="reset" onClick={resetGame}>New Game</button>}
    </div>
  ) 
}

export default App;
