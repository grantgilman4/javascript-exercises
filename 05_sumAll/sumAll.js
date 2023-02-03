function sumAll(first, last) {
    if (first < 0 || last < 0) return "ERROR";
    if (!Number.isInteger(first)  || !Number.isInteger(last)) return 'ERROR';
    if ( first > last) {
        const same = first;
        first = last;
        last = same;
    };
    let finalSum = 0;
    for (i = first; i <= last; i++) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
