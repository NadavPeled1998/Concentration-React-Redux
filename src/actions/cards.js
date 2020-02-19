export const makeCards = (id, cardNumber) => {
    return {
        type: 'MAKE_CARDS',
        payload: {
            id: id,
            cardNumber: cardNumber
        }
    }
}
export const getCard = (id) => {
    return {
        type: 'GET_CARD',
        payload: id
    }
}
export const flipCard = (id, cardNumber) => {
    return {
        type: 'FLIP_CARD',
        payload: {
            id: id,
            cardNumber: cardNumber
        }
    }
}
export const noMatch = (id) => {
    return {
        type: 'NO_MATCH',
        payload: id
    }
}
export const match = (id) => {
    return {
        type: 'MATCH',
        payload: id
    }
}
export const resetCards = () => {
    return {
        type: 'RESET_CARDS',
    }
}