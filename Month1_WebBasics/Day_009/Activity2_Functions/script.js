// Write Your Code Below
const compareValue = (value1, value2) => {
    if (value1 === value2) {
        console.log("They are equal in type and value.");
    } else if (value1 == value2) {
        console.log("They are equal in value.");
    } else {
        console.log("The values are not equal.");
    }
}

// Do some tests:
compareValue(null, null);
compareValue(null, undefined);
compareValue(null, 0);

// Bonus: Expanding function doMath.
const doMath = (num1, num2, method) => {
    if (method === "+") {
        return `${num1} ${method} ${num2} = ${num1 + num2}`;
    } else if (method === "-") {
        return `${num1} ${method} ${num2} = ${num1 - num2}`;
    } else if (method === "/") {
        return `${num1} ${method} ${num2} = ${num1 / num2}`;
    } else if (method === "*") {
        return `${num1} ${method} ${num2} = ${num1 * num2}`;
    } else if (method === "^") {
        return `${num1} ${method} ${num2} = ${num1 ** num2}`;
    } else {
        return "Please check if the correct method is chosen, from '+', '-', '*', '/' or '^'.";
    }
}

console.log(doMath(6, 2, "+"));
console.log(doMath(6, 2, "-"));
console.log(doMath(6, 2, "/"));
console.log(doMath(6, 2, "*"));
console.log(doMath(6, 2, "^"));
console.log(doMath(6, 2, "random"));