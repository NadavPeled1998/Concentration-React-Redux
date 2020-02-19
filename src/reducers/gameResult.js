const gameResultReducer = (state = false, action) => {
    switch(action.type){
        case 'GAME_FINISH':
            return state = action.payload;
        case 'NEW_GAME':
            return state = false    
        default:
            return state
    }
}
export default gameResultReducer


/*
gameFinish(state) {
    if (state.change == state.cards.length / 2) {
      if (state.player1Score > state.player2Score) {
        state.gameResult = "red";
      } else if (state.player2Score > state.player1Score) {
        state.gameResult = "blue";
      } else {
        state.gameResult = "tie";
      }
    }
  }*/