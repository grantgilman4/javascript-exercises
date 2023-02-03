const palindromes = function (string) {
    let newString = string.replace(/[^a-z]/g,"").toLowerCase();
    return (newString.split("").reverse().join("") == newString);
};

// Do not edit below this line
module.exports = palindromes;
