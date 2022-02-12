// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
// Don't repeat you self
class NumeralConverter {
    constructor(numberToConvert) {
        this.value = numberToConvert;
        this.numeral = "";
    }

    processNumeral(symbol, symbolValue) {
        while (this.value >= symbolValue) {
            this.numeral += symbol;
            this.value -= symbolValue;
        }
    }
}

function convertToRoman(num) {
    const converter = new NumeralConverter(num);
    const ROMAN_NUMBERS_MAP = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1,
    };

    for (let symbol in ROMAN_NUMBERS_MAP) {
        converter.processNumeral(symbol, ROMAN_NUMBERS_MAP[symbol]);
    }
    return converter.numeral;
}

console.log(convertToRoman(99));

// M: 1000
// D: 500
// C:100
// L:50
// X:10
// V:5
// I:1