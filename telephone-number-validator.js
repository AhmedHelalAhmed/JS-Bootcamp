const RE = /^\d{3}-\d{3}-\d{4}$/;
const RE2 = /^\(\d{3}\)\d{3}-\d{4}$/;

const RE3 = /^\(\d{3}\) \d{3}-\d{4}$/;

const RE4 = /^\d{3} \d{3} \d{4}$/;


const RE5 = /^\d{10}$/;

const RE6 = /^1 \d{3} \d{3} \d{4}$/;

function telephoneCheck(str) {
    return RE.test(str) ||
        RE2.test(str) ||
        RE3.test(str) ||
        RE4.test(str) ||
        RE5.test(str) ||
        RE6.test(str);
}

// telephoneCheck("555-555-5555");
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("(555) 555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 555 555 5555"));