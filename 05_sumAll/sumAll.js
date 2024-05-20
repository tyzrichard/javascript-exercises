const sumAll = function(num1, num2) {
    let start, finish, sum = 0;
    if (!(Number.isInteger(num1) && Number.isInteger(num2))) {
        return "ERROR";
    }
    if (num1 >= 0 && num2 >= 0) {
        if (num1 > num2) {
            start = num2;
            finish = num1;
        } else {
            start = num1;
            finish = num2;
        }
    } else {
        return "ERROR"
    }

    for (i = start; i <= finish; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
