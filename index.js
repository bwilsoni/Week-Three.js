const stuffObject = {
    name: "Bryan",
    age: 28,
    gender: "Male",
    coffee: true,
    drink: "Beer",
    id: 5
};

const stuffArray = [
    "Bryan",
    28,
    "Male",
    true,
    "Beer",
    5
];

console.group("First:");
for (let index = 0; index < stuffArray.length; index++) {
    const element = stuffArray[index];
    console.log(element)
}
console.groupEnd("END");

console.group("Second:");
stuffArray.forEach(element => {
    console.log(element)
});
console.groupEnd("END");

console.group("Third:");
for (const key in stuffObject) {
    console.log(key, stuffObject[key])
}
console.groupEnd("END");

console.group("Fourth:");
for (const iterator of stuffArray) {
    console.log(iterator)
}
console.groupEnd("END");

let ageAction = stuffObject;

while (ageAction.age <= 50) {
    console.log("Bryan's " + stuffObject.age + " years old!")
    ageAction.age += 1
};


do {
    console.log("Bryan's " + stuffObject.age + " years old!")
    ageAction.age -= 1
} while (ageAction.age >= 28);

