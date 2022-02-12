// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
function convertToRoman(num) {
    let result = "";
// M: 1000
// D: 500
// C:100
// L:50

    while (num >= 1000) {
        result += "M";
        num -= 1000;
    }
    console.log(`Finished with M, leftover: ${num}`);


    while (num >= 900) {
        result += "CM";
        num -= 900;
    }
    console.log(`Finished with CM, leftover: ${num}`);


    while (num >= 500) {
        result += "D";
        num -= 500;
    }
    console.log(`Finished with D, leftover: ${num}`);


    while (num >= 400) {
        result += "CD";
        num -= 400;
    }
    console.log(`Finished with CD, leftover: ${num}`);


    while (num >= 100) {
        result += "C";
        num -= 100;
    }
    console.log(`Finished with C, leftover: ${num}`);

    while (num >= 90) {
        result += "XC";
        num -= 90;
    }
    console.log(`Finished with XC, leftover: ${num}`);


    while (num >= 50) {
        result += "L";
        num -= 50;
    }
    console.log(`Finished with L, leftover: ${num}`);

    while (num >= 40) {
        result += "XL";
        num -= 40;
    }
    console.log(`Finished with XL, leftover: ${num}`);

    while (num >= 10) {
        result += "X";
        num -= 10;
    }
    console.log(`Finished with X, leftover: ${num}`);


    while (num >= 9) {
        result += "IX";
        num -= 9;
    }
    console.log(`Finished with IX, leftover: ${num}`);

    while (num >= 5) {
        result += "V";
        num -= 5;
    }
    console.log(`Finished with V, leftover: ${num}`);

    while (num >= 4) {
        result += "IV";
        num -= 4;
    }
    console.log(`Finished with IV, leftover: ${num}`)

    while (num >= 1) {
        result += "I";
        num -= 1;
    }

    return result;
}

console.log(convertToRoman(1000));

// M: 1000
// D: 500
// C:100
// L:50
// X:10
// V:5
// I:1