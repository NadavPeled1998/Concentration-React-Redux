const changesReducer = (state = 0, action) => {
    switch(action.type){
        case 'CHANGE_TURNS':
            return state+1;
        case 'RESET_CHANGE':
            return state = 0;
        default:
            return state
    }
}
export default changesReducer
