const ROTATION = 13;

function rot13(str) {
    let decodedStr = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const charCode = str.charCodeAt(i);

        if (/[A-M]/.test(char)) {
            let decodedCharCode = charCode + ROTATION;
            decodedStr += String.fromCharCode(decodedCharCode);
            continue;
        }

        if (/[N-Z]/.test(char)) {
            let decodedCharCode = charCode - ROTATION;
            decodedStr += String.fromCharCode(decodedCharCode);
            continue;
        }
        decodedStr += char;
    }

    return decodedStr;
}

console.log(rot13("SERR PBQR PNZC"));
// grot13("SERR PBQR PNZC");