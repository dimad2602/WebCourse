const firstName = "Dima";
const lastName = "Dzheglo";
const patronymic = "Sergeevich";
const birthYear = 2002;
const major = "ISIT";

const result1 =
  "firstName: " +
  firstName +
  "\nlastName: " +
  lastName +
  "\npatronymic: " +
  patronymic +
  "\nbirthYear: " +
  birthYear +
  "\nmajor: " +
  major;

const result2 = `
firstName: ${firstName} 
lastName: ${lastName} 
patronymic: ${patronymic} 
birthYear: ${birthYear} 
major: ${major}`;

console.log(result1);
console.log(result2);
