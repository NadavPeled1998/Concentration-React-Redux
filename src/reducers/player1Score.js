const player1ScoreReducer = (state = 0, action) => {
    switch(action.type){
        case 'PLAYER1_SUCCED':
            return state + 1;
        case 'RESET_PLAYER1_SCORE':
            return state = 0;    
        default:
            return state
    }
}
export default player1ScoreReducer
