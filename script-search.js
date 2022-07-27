"use strict";

// filter
const names = ["Ivan", "Ann", "Ksenia", "Voldemar"];
const shortNames = names.filter(function (name) {
  return name.length < 5;
});
console.log(shortNames);

// map
let answers = ["iVaN", "ANNa", "HeLlo"];
answers = answers.map((item) => {
  return item.toLowerCase();
});
console.log(answers);

// every/some
const some = [4, "hello", "hsjgha"];
console.log(some.some((item) => {
    return typeof item === "number";
  })
);
console.log(some.every((item) => {
    return typeof item === "number";
  })
);

// reduce
const arr = [4, 5, 1, 3, 2, 6]
const res = arr.reduce((sum, current) => {
    return sum + current
})
console.log(res)

const array = ["apple", "pear", "plum"]
const resulty = array.reduce((summ, cuurrent)=> {
    return `${summ}, ${cuurrent}`
})
console.log(resulty)

// EXAMPLE
const obj = {
    ivan: "persone",
    ann: "persone",
    dog: "animal",
    cat: "animal",
};

const newArray = Object.entries(obj)
.filter(item=> item[1] === 'persone')
.map(item => item[0])
console.log(newArray)