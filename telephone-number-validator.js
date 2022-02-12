const RE1 = /^(1\s?)?\d{3}-\d{3}-\d{4}$/;
const RE2 = /^(1\s?)?\(\d{3}\)\s?\d{3}-\d{4}$/;
const RE3 = /^(1\s?)?\d{3}\s?\d{3}\s?\d{4}$/;


const REGEXES = [RE1, RE2, RE3];

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