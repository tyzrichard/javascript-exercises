const fibonacci = function(num) {
    if (typeof num === 'string') {
        num = parseInt(num);
    }
    if (num < 0) {return "OOPS"}
    else if (num == 0) {
        return 0;
    }
    else if (num <= 2) {
        return 1;
    }
    let lastlastNumber = 1, lastNumber = 1, number;
    for (i = 2; i < num; i++) {
        number = lastlastNumber + lastNumber;
        lastlastNumber = lastNumber;
        lastNumber = number;
    }
    return number
};

// Do not edit below this line
module.exports = fibonacci;
