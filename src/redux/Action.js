// Action Type
export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const INPUT = 'input'
//function that return Action
export const increment = () => {
    return {
        type : INCREMENT
    }
}
export const decrement = () => {
    return {
        type : DECREMENT
    }
}

export const input = (num) => {
    return {
        type : INPUT,
        number : num
    }
}