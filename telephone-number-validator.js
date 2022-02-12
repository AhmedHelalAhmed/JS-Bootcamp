const RE = /^\d{3}-\d{3}-\d{4}$/;
const RE2 = /^\(\d{3}\)\s?\d{3}-\d{4}$/;
const RE4 = /^\d{3}\s?\d{3}\s?\d{4}$/;
const RE6 = /^1\s\d{3}\s\d{3}\s\d{4}$/;

const REGEXES = [RE, RE2, RE4, RE6];

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