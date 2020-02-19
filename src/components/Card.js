import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addFlippedCard, resetFlippedCards} from '../actions/flippedCards';
import {countTurns} from '../actions/turns';
import { player1Succed } from '../actions/player1Score';
import { player2Succed } from '../actions/player2Score';
import { gameFinish } from '../actions/gameResult';
import { theWinner } from '../actions/winner';
import { changeTurns } from '../actions/change';

function Card({id}){
    const dispatch = useDispatch();
    const cards = useSelector(state =>state.cards);
    const  flippedCards = useSelector(state => state.flippedCards);
    const  turns = useSelector(state => state.turns);
    const  change = useSelector(state =>state.change);
    let player1Score = useSelector(state =>state.player1Score);
    let  player2Score = useSelector(state => state.player2Score);
    const  victory1 = useSelector(state => state.victory1);
    const  victory2 = useSelector(state =>state.victory2);
    const option = useSelector(state => state.cards.find(card => card.id === id))
    const flip = () => {
        if(flippedCards.length < 2){
            if(flippedCards.length < 1 || flippedCards[0].id !== option.id){
                option.flipped = true
                dispatch(addFlippedCard(option.id, option.cardNumber));                
                flippedCards.push({id: option.id, cardNumber: option.cardNumber})
            }    
            if(flippedCards.length > 1) {
                if(flippedCards[0].cardNumber === option.cardNumber){
                    setTimeout(() => {
                        dispatch(countTurns());
                        dispatch(changeTurns())
                        for(let i = 0;i<cards.length; i++){
                            if(cards[i].cardNumber === option.cardNumber)
                            cards[i].match = true
                        }
                        dispatch(resetFlippedCards());
                        if((turns + change) % 2){
                            dispatch(player2Succed())
                            player2Score++
                        }
                        else{
                            dispatch(player1Succed())
                            player1Score++  
                        }
                        if(change+1 === cards.length/2){
                            if (player1Score > player2Score){
                                dispatch(gameFinish('red'))
                            }
                            else if(player2Score > player1Score){
                                dispatch(gameFinish('blue'))
                            }
                            else{
                                dispatch(gameFinish('tie'))
                            }
                            if(victory1.length > 1 || victory2.length > 1){
                                if(victory1> victory2){
                                    dispatch(theWinner('red'))
                                }
                                else{
                                    dispatch(theWinner('blue'))
                                }
                            }
                        }
                    }, 2000)
                }
                else{
                  setTimeout(() => {
                        dispatch(countTurns());
                        for(let i = 0;i<cards.length; i++){
                            cards[i].flipped = false
                        }
                        dispatch(resetFlippedCards());    
                    },2000)
                }
            }
        }
    }
    return <div className={option.match ? 'hidden' : undefined}>
        <div className={option.flipped ? 'front' : 'back'}
            onClick={() => flip()}>
            {option.flipped && <span>{option.cardNumber}</span>}
        </div>
    </div>
}
export default Card;