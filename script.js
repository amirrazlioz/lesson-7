// מערכים
// tar-1 
function sort(arr) {
    return arr.sort((a, b) => b - a);
}

// דוגמה לשימוש
const numbers = [3, 1, 4, 1, 5, 9, 2];
const sortedNumbers = sort(numbers);
console.log(sortedNumbers); // [9, 5, 4, 3, 2, 1, 1]


// tar-2

function findCommonElements(arr1, arr2) {
    const result = [];
    
    for (let i = 0; i < arr1.length; i++) {
        let foundInArr2 = false;
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                foundInArr2 = true;
                break;
            }
        }

        if (foundInArr2) {
            let alreadyInResult = false;
            for (let k = 0; k < result.length; k++) {
                if (result[k] === arr1[i]) {
                    alreadyInResult = true;
                    break;
                }
            }
            if (!alreadyInResult) {
                result.push(arr1[i]);
            }
        }
    }

    return result;
}

// דוגמה לשימוש
const array1 = [1, 2, 1, 2, 1];
const array2 = [2, 2, 2, 1, 3, 1, 2];
const common = findCommonElements(array1, array2);
console.log(common); // [1, 2]


// tar-3

function calculateMatrixAverage(matrix) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
            count++;
        }
    }

    return count > 0 ? sum / count : 0; // החזרת הממוצע, או 0 אם המטריצה ריקה
}

// דוגמה לשימוש
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const average = calculateMatrixAverage(matrix);
console.log(average); // 5



// tar-4

function countAndRemoveOccurrences(arr, number) {
    let count = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === number) {
            count++;
            arr.pop(); // הסרת האלמנט האחרון במערך
        } else {
            const temp = arr.pop(); // הסרה של האלמנט האחרון
            arr.unshift(temp); // החזרה לתחילת המערך אם הוא אינו המספר המבוקש
        }
    }

    return count;
}

// דוגמה לשימוש
const numbers = [1, 2, 3, 2, 4, 2, 5];
const target = 2;
const occurrences = countAndRemoveOccurrences(numbers, target);
console.log("מספר הפעמים:", occurrences); // 3
console.log("המערך לאחר העדכון:", numbers); // [1, 3, 4, 5]


// Arrow function
// tar-1

const isStringLongerThanFive = (str) => str.length > 5;

// דוגמה לשימוש
console.log(isStringLongerThanFive("Hello, World!")); // true
console.log(isStringLongerThanFive("Hi")); // false


// tar-2

const isFirstAndLastEqual = (str) => {
    if (str.length === 0) {
        return "המחרוזת ריקה";
    }
    return str[0] === str[str.length - 1] 
        ? "התא הראשון והאחרון זהים" 
        : "התא הראשון והאחרון אינם זהים";
};

// דוגמה לשימוש
console.log(isFirstAndLastEqual("radar")); // "התא הראשון והאחרון זהים"
console.log(isFirstAndLastEqual("hello")); // "התא הראשון והאחרון אינם זהים"
console.log(isFirstAndLastEqual("a")); // "התא הראשון והאחרון זהים"
console.log(isFirstAndLastEqual("")); // "המחרוזת ריקה"


// tar-3

const isLastCharUppercase = (str) => {
    if (str.length === 0) {
        return "שקר"; // אם המחרוזת ריקה, אין תו אחרון
    }
    const lastChar = str[str.length - 1];
    return lastChar >= 'A' && lastChar <= 'Z' ? "אמת" : "שקר";
};

// דוגמה לשימוש
console.log(isLastCharUppercase("Hello")); // "שקר"
console.log(isLastCharUppercase("HellO")); // "אמת"
console.log(isLastCharUppercase(""));      // "שקר"
console.log(isLastCharUppercase("TEST"));  // "אמת"


// Map/forEach

// tar-1

function findDivisibleByThree(arr) {
    let found = false;

    arr.forEach((num, index) => {
        if (num % 3 === 0) {
            console.log(`המספר ${num} מתחלק ב-3 ונמצא במיקום ${index}`);
            found = true;
        }
    });

    if (!found) {
        console.log("The array is not divisible by 3");
    }
}

// דוגמה לשימוש
const numbers = [1, 9, 4, 6, 8, 11, 12, 14];
findDivisibleByThree(numbers);


// tar-2

function identifyCase(arr) {
    const result = arr.map(char => {
        if (char >= 'A' && char <= 'Z') {
            return 'U'; // Uppercase
        } else if (char >= 'a' && char <= 'z') {
            return 'L'; // Lowercase
        } else {
            return '?'; // לא אות תקינה
        }
    });
    return result;
}

// דוגמה לשימוש
const letters = ['a', 'B', 'c', 'D', 'e', 'F', 'G', 'h'];
const caseArray = identifyCase(letters);
console.log(caseArray); // ["L", "U", "L", "U", "L", "U", "U", "L"]


// tar-3

const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
const arrMap = arr.map((item, index) => {
    if (index % 2 === 0) {
        return index;
    }
    return item;
});

console.log(arrMap); // [0, 'b', 2, 'd', 4, 'f']

// Filter

// tar-4

// הגדרת הפונקציה
function filterAdultAges(ages) {
    return ages.filter(age => age > 18);
}

// דוגמה לשימוש
const ages = [15, 18, 22, 16, 25, 30, 17, 19];
const adultAges = filterAdultAges(ages);

console.log("מערך הגילאים המקורי:", ages);
console.log("מערך הגילאים מעל 18:", adultAges); // [22, 25, 30, 19]


// tar-5

// הגדרת הפונקציה
function removeIndex3(arr) {
    return arr.filter((element, index) => index !== 3);
}

// המערך המקורי
const numbers = [2, 4, 1, 2, 7, 2, 8];

// הפעלת הפונקציה
const newArray = removeIndex3(numbers);

console.log("המערך המקורי:", numbers);
console.log("המערך החדש (ללא אינדקס 3):", newArray); // [2, 4, 1, 7, 2, 8]


// Spread:

// tar-6

let names = ['דני', 'יוסי', 'מיכל'];

function addName(newName) {
    names = [...names, newName];
    return names;
}

// דוגמאות לשימוש
console.log("מערך מקורי:", names);

addName('רונית');
console.log("אחרי הוספת השם הראשון:", names);

addName('משה');
console.log("אחרי הוספת השם השני:", names);


// tar-7

// שני המערכים המקוריים
const names1 = ['דני', 'יוסי', 'מיכל'];
const names2 = ['רונית', 'משה', 'שרה'];

const combinedNames = [...names1, ...names2];

// הדפסת התוצאות
console.log("מערך ראשון:", names1);
console.log("מערך שני:", names2);
console.log("מערך מאוחד:", combinedNames);