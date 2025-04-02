const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

console.log('----------forEach----------');

people.forEach((person) => {
  console.log(person.name);
});

console.log('----------map----------');
const names = people.map((person) => {
  return person.name;
});

console.log(names);