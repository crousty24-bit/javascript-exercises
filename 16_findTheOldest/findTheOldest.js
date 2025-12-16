// next time : delete all code first before redo it !

const findTheOldest = function (people) {

  function getAge(person) {
    if (person.yearOfDeath) {
      return person.yearOfDeath - person.yearOfBirth;
    } else {
      return new Date().getFullYear() - person.yearOfBirth;
    }
  }

  return people.reduce((oldest, current) => {
    const ageOldest = getAge(oldest);
    const ageCurrent = getAge(current);

    if (ageCurrent > ageOldest) {
      return current;
    } else {
      return oldest;
    }
  });
};
// will come back to this from scratch another day, refer to this : 
// misconception about (person) parameter : when func getAge is called : 
// we are attributing it (oldest/current) which are in people.reduce()
// so oldest/current are 'magicly' storing object people[0], people [1], and so on



// Do not edit below this line
module.exports = findTheOldest;
