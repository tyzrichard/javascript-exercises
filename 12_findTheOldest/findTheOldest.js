const findTheOldest = function(people) {
    oldest = people[0]
    people.forEach((person) => {
        if (typeof person.yearOfDeath == 'undefined') {
            person.yearOfDeath = parseInt(new Date().getFullYear())
        }
        if ((person.yearOfDeath - person.yearOfBirth) > oldest.yearOfDeath - oldest.yearOfBirth) {
            oldest = person;
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
