import { multiply, divide } from 'mathjs';

export function threeNumberRandom() {
    const result = []
    while (result.length < 3) {
        const number = Math.floor(Math.random() * 9);
        if (result.indexOf(number) === -1) result.push(number)
    }
    return result
}

export function changeStyleWithScale(value, scale) {
    return multiply(value, divide(parseInt(scale), 100))
}

export function isJsonString(str: string) {
    if (typeof str == 'string') {
        try {
            if (typeof JSON.parse(str) == 'object') {
                return true;
            }
        } catch (e) {
            return false;
        }
    }
    return false;
}