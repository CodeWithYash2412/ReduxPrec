import { DECREMENT, INCREMENT } from "../constant"

export const inceNum = () => {
    return {
        type: INCREMENT
    }
}

export const decNum = () => {
    return {
        type: DECREMENT
    }
}