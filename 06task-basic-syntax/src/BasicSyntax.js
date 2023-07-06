export function romanToInteger(str) {
    const valueOfRomanNumbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let result = 0;
    let prevValue = valueOfRomanNumbers[str[0]];
    for (let romanNumber of str) {
        let value = valueOfRomanNumbers[romanNumber];
        result += value;
        if (prevValue < value) {
            result -= prevValue * 2;
        }
        prevValue = value;
    }
    return result;
}
