const fibonacci = function(num) {
    let x = 0
    let y = 1
    for (let i = 1; i < num; i++) {
        const step = y;
        y += x;
        x = step;
    }
    return y;
};

// Do not edit below this line
module.exports = fibonacci;
