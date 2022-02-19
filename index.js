// Functional Programming
/*
// The global variable
const watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

// Only change code below this line

const filteredList = watchList.filter(film => {
    return film.imdbRating > 8.0;
}).map(film => {
    return {"title": film.Title, "rating": film.imdbRating};
});

// Only change code above this line

console.log(filteredList);
*/

/*
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
    // Only change code below this line
    const newArray = [];

    for (let item of this) {
        if (callback(item)) {
            newArray.push(item);
        }
    }
    // Only change code above this line
    return newArray;
};

const new_s = s.myFilter(function (item) {
    return item % 2 === 1;
});

console.log(new_s);
*/

/*
function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line

    return anim.slice(beginSlice, endSlice);
    // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));
*/

/*
function nonMutatingSplice(cities) {
    // Only change code below this line
    return cities.slice(0,3);

    // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));
*/

/*
function nonMutatingConcat(original, attach) {
    // Only change code below this line

    return original.concat(attach);
    // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
console.log(nonMutatingConcat(first, second));
*/

/*
function nonMutatingPush(original, newItem) {
    // Only change code below this line
    return original.concat(newItem);

    // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
console.log(nonMutatingPush(first, second));
*/

/*
// The global variable
const watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

function getRating(watchList) {
    // Only change code below this line
    let averageRating;
    const filteredFilms = watchList.filter(item => item.Director === "Christopher Nolan");
    averageRating = filteredFilms.reduce((acu, item) => acu + parseFloat(item.imdbRating), 0) / filteredFilms.length;
    // Only change code above this line
    return averageRating;
}

console.log(getRating(watchList));
*/

/*
const squareList = arr => {
    // Only change code below this line


    return arr.filter(item => item > 0).map(item => item * item).filter(item => parseInt(item) === item);
    // Only change code above this line
};

// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);
*/

/*
function alphabeticalOrder(arr) {
    // Only change code below this line

    return arr.sort(function (a, b) {
        return a === b ? 0 : a > b ? 1 : -1;
    });
    // Only change code above this line
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
*/

/*
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Only change code below this line
    return arr.concat([]).sort(function (a, b) {
        return a - b;
    });

    // Only change code above this line
}

console.log(nonMutatingSort(globalArray));
*/

/*
function splitify(str) {
    // Only change code below this line
    return str.split(/\W/);

    // Only change code above this line
}

console.log(splitify("Hello World,I-am code"));
*/

/*
function sentensify(str) {
    // Only change code below this line

    return str.split(/\W/).join(' ');

    // Only change code above this line
}

console.log(sentensify("May-the-force-be-with-you"));
*/

/*
// Only change code below this line
function urlSlug(title) {
    return title.split(/\W/).filter(item => item).join('-').toLowerCase();
}

// Only change code above this line
console.log(urlSlug(" Winter Is  Coming"));
*/

/*
function checkPositive(arr) {
    // Only change code below this line

    return arr.every(item => item > 0);

    // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
*/

/*
function checkPositive(arr) {
    // Only change code below this line

    return arr.some(item => item > 0);
    // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
*/

/*
// Introduction to Currying and Partial Application

function add(x) {
    // Only change code below this line

    return function (y) {
        return function (z) {
            return x + y + z;
        }
    }
    // Only change code above this line
}

console.log(add(10)(20)(30));
*/

// Intermediate Algorithm Scripting

/*
function sumAll([start, end]) {
    if (start > end) {
        [start, end] = [end, start];
    }
    const numbers = [];
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }
    return numbers.reduce((acu, item) => item + acu, 0);
}

console.log(sumAll([1, 4]));
*/

/*
function diffArray(arr1, arr2) {
    const newArr = [];

    for (let item of arr1) {
        if (!arr2.includes(item)) {
            newArr.push(item);
        }
    }
    for (let item of arr2) {
        if (!arr1.includes(item)) {
            newArr.push(item);
        }
    }

    return newArr;
}

console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
*/

/*
function destroyer(arr, ...toDestroy) {
    return arr.filter(item => !toDestroy.includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
*/

/*
function whatIsInAName(collection, source) {
    let arr = [];

    // Only change code below this line
    arr = [...collection.filter(item => {
        const props = Object.keys(source);
        let isMatch = true;
        for (const prop of props) {
            if (source[prop] !== item[prop]) {
                isMatch = false;
            }
        }
        return isMatch;
    })];
    // Only change code above this line
    return arr;
}

console.log(whatIsInAName([{"apple": 1, "bat": 2}, {"apple": 1}, {"apple": 1, "bat": 2, "cookie": 2}], {
    "apple": 1,
    "cookie": 2
}));
*/

/*
function spinalCase(str) {


    return str.match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g).join('-').toLowerCase();
}

console.log(spinalCase("thisIsSpinalTap"));
*/

/*
const VOWEL = ['a', 'e', 'i', 'o', 'u'];

function translatePigLatin(str) {
    if (VOWEL.includes(str[0])) {
        return str + 'way';
    }
    let index = 1;
    for (let i = 1; i < str.length; i++) {
        if (!VOWEL.includes(str[i])) {
            index++;
        } else {
            break;
        }
    }


    return str.slice(index, str.length) + str.slice(0, index) + 'ay';
}

console.log(translatePigLatin("rhythm"));
*/

/*
function myReplace(str, before, after) {
    const index = str.indexOf(before);
    if (index === -1) {
        return str;
    }
    const isCapitalized = /^[A-Z]/.test(before);
    if (isCapitalized) {
        after = after.slice(0, 1).toUpperCase() + after.slice(1, after.length);
    } else {
        after = after.toLowerCase();
    }

    return str.replace(before, after);
}

console.log(myReplace("I think we should look up there", "up", "Down"));
*/

/*
const PAIRS = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
};

function pairElement(str) {
    const arr = str.split("");
    return arr.map(x => [x, PAIRS[x]]);
}

console.log(pairElement("TTGAG"));
*/

/*
function fearNotLetter(str) {

    for (let i = 0; i < str.length; i++) {
        if (i === str.length - 1) {
            continue;
        }

        if (str.charCodeAt(i + 1) !== str.charCodeAt(i) + 1) {
            return String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
    return undefined;
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
*/

/*
function uniteUnique(...arr) {
    const flat = [...arr.flat()];
    const res = [];
    for (const item of flat) {
        if (!res.includes(item)) {
            res.push(item);
        }
    }
    return res;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
*/

/*
const HTML_ENTITIES = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;',
};

function convertHTML(str) {
    let convertedStr = str;
    for (const entity in HTML_ENTITIES) {
        if (str.includes(entity)) {
            convertedStr = convertedStr.replaceAll(entity, HTML_ENTITIES[entity]);
        }
    }
    return convertedStr;
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));
*/

/*
function fibonacci(num) {
    if (num === 1 || num === 2) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

function sumFibs(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        const value = fibonacci(i);
        if (value > num) {
            break;
        }
        if (value % 2 !== 0) {
            sum += value;
        }
    }

    return sum;
}


console.log(sumFibs(1000));
*/

/*
function isPrime(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
        if (count > 2) {
            break;
        }
    }

    return count === 2;
}

function sumPrimes(num) {
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}

console.log(sumPrimes(977));
*/

/*
// How?!
function smallestCommons([start, end]) {
    if (end < start) {
        [start, end] = [end, start];
    }
    const numberDivisors = end - start + 1;
    const numbers = [];
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }
    let upperBound = numbers.reduce((acr, item) => acr * item, 1);
    for (let multiple = end; multiple <= upperBound; multiple += end) {
        let divisorCount = 0;
        for (let i = start; i <= end; i++) {
            if (multiple % i === 0) {
                divisorCount += 1;
            }
        }
        if (divisorCount === numberDivisors) {
            return multiple;
        }
    }
}

console.log(smallestCommons([1, 5]));
*/

/*
function dropElements(arr, func) {
    const res = [];
    const targetNumbers = [...arr];
    targetNumbers.unshift();
    let addRestWithoutCheck = 0;
    for (let index in targetNumbers) {
        const value = arr[index];
        if (addRestWithoutCheck || func(value)) {
            res.push(value);
            addRestWithoutCheck = true;
        }
    }


    return res;
}

console.log(dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
}));
*/

/*
// Cool
function steamrollArray(arr) {

    if (!Array.isArray(arr)) {
        return arr;
    }
    let flatArray = [];
    for (const arrElement of arr) {
        if (Array.isArray(arrElement)) {
            flatArray.push(...steamrollArray(arrElement));
        } else {
            flatArray.push(arrElement);
        }
    }

    return flatArray;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
*/
/*
// very nice
function binaryAgent(str) {
    const words = str.split(' ');
    let statement = '';
    for (const word of words) {
        statement+=String.fromCharCode(parseInt(word,2));
    }
    return statement;
}

console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));
*/


/*
function truthCheck(collection, pre) {

    return collection.every(item=>item[pre]);
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
*/

/*
function addTogether(...arg) {

    if (!arg.every(item => typeof item === "number")) {
        return undefined;
    }

    if (arg.length === 1) {
        return function (item) {
            if (typeof item !== "number") {
                return undefined;
            }
            return arg[0] + item;
        }
    }
    return arg.reduce((acr, item) => item + acr, 0);
}

console.log(addTogether(2)([3]));
*/

/*

const Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;
    this.getFirstName = () => {
        return fullName.split(' ')[0];
    };
    this.getLastName = () => {
        return fullName.split(' ')[1];
    };
    this.getFullName = () => {
        return fullName;
    };
    this.setFirstName = (name) => {
        fullName = name + ' ' + fullName.split(' ')[1];
    };
    this.setLastName = (name) => {
        fullName = fullName.split(' ')[0] + ' ' + name;

    };
    this.setFullName = (name) => {
        fullName = name;
    };

};

const bob = new Person('Bob Ross');
bob.setFirstName("Haskell")
console.log(bob.getFullName());

console.log(Object.keys(bob).length);

*/


function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    return arr.map(item => {
        return {
            "name": item.name,
            "orbitalPeriod": Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM))
        }
    });
}

console.log(orbitalPeriod([{name: "sputnik", avgAlt: 35873.5553}]));

























