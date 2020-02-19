const victory1Reducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_VICTORY1':
            return state = [...state, state.length];
        case 'RESET_VICTORY1':
            return state = []    
        default:
            return state
    }
}
export default victory1Reducer


