const RE = /^(1\s?)?\d{3}-\d{3}-\d{4}$/;
const RE2 = /^(1\s?)?\(\d{3}\)\s?\d{3}-\d{4}$/;
const RE4 = /^(1\s?)?\d{3}\s?\d{3}\s?\d{4}$/;


const REGEXES = [RE, RE2, RE4];

function telephoneCheck(str) {
    for (let regex of REGEXES) {
        if (regex.test(str)) {
            return true;
        }
    }
    return false;
}

// telephoneCheck("555-555-5555");
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("(555) 555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("1(555)555-5555"));
console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("1 456 789 4444"));