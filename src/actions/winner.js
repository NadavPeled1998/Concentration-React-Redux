export const theWinner = (winner) => {
    return {
        type: 'THE_WINNER',
        payload: winner
    }
}
export const resetWinner = () => {
    return {
        type: 'RESET_WINNER'
    }
}