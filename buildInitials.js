// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:

// Sam Harris => S.H
// Patrick Feeney => P.F.

function abbrevName(name) {
  console.log(name.split(" "));
  const [first, last] = name.split(" ");
  return `${first[0]}.${last[0]}`.toUpperCase();
}

function abbrevName2(name) {
  return name
    .split(" ")
    .map((initial) => initial[0].toUpperCase())
    .join(".");
}

// Test.assertEquals(abbrevName("Sam Harris"), "S.H");
// Test.assertEquals(abbrevName("Patrick Feenan"), "P.F");
// Test.assertEquals(abbrevName("Evan Cole"), "E.C");
// Test.assertEquals(abbrevName("P Favuzzi"), "P.F");
// Test.assertEquals(abbrevName("David Mendieta"), "D.M");

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feenan"));
console.log(abbrevName("Evan Cole"));
console.log(abbrevName("P Favuzzi"));
console.log(abbrevName("David Mendieta"));
console.log(abbrevName("peter pallen"));

console.log(abbrevName2("Sam Harris"));
console.log(abbrevName2("Patrick Feenan"));
console.log(abbrevName2("Evan Cole"));
console.log(abbrevName2("P Favuzzi"));
console.log(abbrevName2("David Mendieta"));
console.log(abbrevName2("peter pallen"));
