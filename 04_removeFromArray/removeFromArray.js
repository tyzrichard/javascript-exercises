const removeFromArray = function(array, ...args) { //...args groups all other parameters into an array. useful.
    return array.filter(x => !args.includes(x))
    //filter removes everything that does not fit the criteria
    //includes is kinda self-explanatory
};

// Do not edit below this line
module.exports = removeFromArray;
