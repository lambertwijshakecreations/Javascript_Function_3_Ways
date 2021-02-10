
//function declaration
function add(number1, number2){
const sum1 = number1 * number2;
const sum2 = sum1 + sum1;
return sum2 * sum2;
}
console.log(add(2, 2));

//function expression
 const add = function (number1, number2){
    const sum1 = number1 * number2;
    const sum2 = sum1 + sum1;
    return sum2 * sum2;
    };
    console.log(add(2, 2));

//Arrow function
const add = (number1, number2) => {
    const sum1 = number1 * number2;
    const sum2 = sum1 + sum1;
    return sum2 * sum2;
    }
    console.log(add(2, 2));