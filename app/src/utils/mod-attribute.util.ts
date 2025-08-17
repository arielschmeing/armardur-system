const DISCOUNT = 10;
const DIVISION = 2;

export const modAttribute = (attribute: number) => {
    return Math.floor((attribute - DISCOUNT) / DIVISION)
}