export const addFlippedCard = (id, cardNumber) => {
    return {
        type: 'ADD_FLIPPED_CARD',
        payload: {
            id: id,
            cardNumber: cardNumber
        }
    }
}
export const resetFlippedCards = () => {
    return {
        type: 'RESET_FLIPPED_CARDS'
    }
}