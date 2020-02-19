import cardsReducer from './cards';
import changesReducer from './change';
import flippedCardsReducer from './flippedCards';
import gameResultReducer from './gameResult';
import player1ScoreReducer from './player1Score';
import player2ScoreReducer from './player2Score';
import turnsReducer from './turns';
import victory1Reducer from './victory1';
import victory2Reducer from './victory2';
import winnerReducer from './winner';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    cards: cardsReducer,
    change: changesReducer,
    flippedCards: flippedCardsReducer,
    gameResult: gameResultReducer,
    player1Score: player1ScoreReducer,
    player2Score: player2ScoreReducer,
    turns: turnsReducer,
    victory1: victory1Reducer,
    victory2: victory2Reducer,
    winner: winnerReducer
})

export default allReducers