const turnsReducer = (state = 0, action) => {
    switch(action.type){
        case 'COUNT_TURNS':
            return state+1;
        case 'RESET_TURNS':
            return state = 0;
        default:
            return state
    }
}
export default turnsReducer
