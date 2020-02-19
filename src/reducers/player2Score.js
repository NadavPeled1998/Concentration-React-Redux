const player2ScoreReducer = (state = 0, action) => {
    switch(action.type){
        case 'PLAYER2_SUCCED':
            return state + 1;
        case 'RESET_PLAYER1_SCORE':
            return state = 0
        default:
            return state
    }
}
export default player2ScoreReducer
