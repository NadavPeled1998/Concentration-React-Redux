const winnerReducer = (state = false, action) => {
    switch(action.type){
        case 'THE_WINNER':
            return state = action.payload;
        case 'RESET_WINNER':
            return state = false;
        default:
            return state
    }
}
export default winnerReducer

/*theWinner(state){
    if((state.victory1 > 4 || state.victory2> 4) && state.gameResult){
      if (state.victory1 > state.victory2) {
        state.winner = "red";
      }
      else{
        state.winner = "blue";
      } 
    }
  },*/