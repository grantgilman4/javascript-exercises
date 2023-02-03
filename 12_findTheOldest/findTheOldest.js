const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.birthYear,oldest.deathYear);
        const currentAge = getAge(oldest.birthYear,oldest.deathYear);
        return oldestAge < currentAge ? currentPerson : oldest;
    });
};

const getAge = function(birth,death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}
// Do not edit below this line
module.exports = findTheOldest;
