const cardsReducer = (state = [], action) => {
    switch(action.type){
        case 'MAKE_CARDS':
            return state = [...state,{
                id: action.payload.id,
                flipped: false,
                match: false,
                cardNumber: action.payload.cardNumber}
                ];
        case 'FLIP_CARD': 
            state[action.payload.id] ={
                id: action.payload.id,
                flipped: true,
                match: false,
                cardNumber: action.payload.cardNumber}
            return state
        case 'NO_MATCH':
            state[action.payload].flipped = false;
            return  state
        case 'MATCH':
            return state[action.payload].match = true;
        case 'RESET_CARDS':
            return state = [];
        default:
            return state
    }
}
export default cardsReducer



/*noMatch(state) {
    for (let i = 0; i < state.cards.length; i++) {
      state.cards[i].flipped = false;
    }
  },*/
  /*match(state, value) {
    for (let i = 0; i < state.cards.length; i++) {
      if (state.cards[i].cardNumber === value) {
        state.cards[i].match = true;
      }
    }
  },*/

