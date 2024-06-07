const palindromes = function (string) {
    cleanedString = string.toLowerCase().split('').filter(char => /^[a-z0-9]*$/gi.test(char)).join('');
    reversed = cleanedString.split('').reverse().join('');
    return cleanedString === reversed;
};

// Do not edit below this line
module.exports = palindromes;
