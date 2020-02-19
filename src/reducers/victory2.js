const victory2Reducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_VICTORY2':
            return state = [...state, state.length];
        case 'RESET_VICTORY2':
            return state = [];
        default:
            return state
    }
}
export default victory2Reducer
