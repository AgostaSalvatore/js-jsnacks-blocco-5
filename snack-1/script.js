const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

console.log('----------forEach----------');

names.forEach(name => console.log(name));

console.log('----------for----------');

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
console.log('--------------------');

console.log(names);