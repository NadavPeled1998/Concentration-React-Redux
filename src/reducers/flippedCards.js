const flippedCardsReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_FLIPPED_CARD':
            return state = [...state, {
                id: action.payload.id,
                cardNumber: action.payload.cardNumber
            }]
        case 'RESET_FLIPPED_CARDS':
            return state = [];
        default:
            return state
    }
}
export default flippedCardsReducer
