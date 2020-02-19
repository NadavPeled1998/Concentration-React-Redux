export const gameFinish = (winner) => {
    return {
        type: 'GAME_FINISH',
        payload: winner
    }
}
export const newGame = () => {
    return {
        type: 'NEW_GAME'
    }
}
 