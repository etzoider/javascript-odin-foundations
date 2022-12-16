// function findOldest(Object people) : Obj person
// finds oldest person amongst list of person Objects


function findOldest(people) {
    let currYear = 2022;
    let biggestAge = 0; let oldestPerson; let age;

    people.forEach(p => {

        if (p.yearOfDeath) {
            age = p.yearOfDeath - p.yearOfBirth;
        } else {
            age = currYear - p.yearOfBirth;
        }

        if (age > biggestAge) {
            oldestPerson = p.name;
            biggestAge = age;
        }

    })
    return oldestPerson;
}

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  const people2 = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const people3 = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]



console.log(findOldest(people));

console.log(findOldest(people2));

console.log(findOldest(people3));