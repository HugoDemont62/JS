//// Variables
// var: pas recommandé nikomouk
// let: variable
// const: constante (on peut pas le changer)
var a = 1;
let b = 2;
const c = 3;

//// Fonctions
// 2 types de "function"
function uneFonction(params) {
    // ta fonction
}

const uneAutreFonction = (params, a, b) => a + b; // implicit return
// fonctions anonymes
(function () {
});


() => {
};

function somme(n1, n2) {
    return n1 + n2;
}

//// Tableaux (array) + les fonctions tableau

const arr = [1, 2, 3, 4, 5, 6];
const arr2 = [
    [1, 2],
    [3, 4],
]; // tableau 2 dimensions

// longueur du tableau (nombre d'élément dans un tableau)
// arr.length

// map (return un nouveau tableau selon la fonction passée)
const double = arr.map((nombre, index) => nombre * index);

// const myMap = (arr, callback) => {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newArray.push(callback(element, i, arr))
//   }
//   return newArray
// };
// myMap([1,2], (element, index, array) => element * 2)

// forEach (ne return rien, juste itère à travers un tableau)
// arr.forEach(el => console.log(el));

// flat
arr2.flat();

// reduce (itère un tableau et return une seule valeur)
const sum = arr.reduce((nombre, accumulator) => (accumulator += nombre), 0);

// some (return true si une des valeurs correspond au résultat de la fonction)
// every (return true si TOUTES les valeurs correspondent au résultat de la fonction)
arr.some(number => number > 2); // true
arr.every(number => number > 2); // false

// find (return un élément du tableau)
// filter (return un tableau de types T)
arr.find(number => number === 2); // trouve le nombre qui est égal à 2 (dans ce cas c'est useless puisque ça va return 2 (l'élément en question))
arr.filter(number => number > 2); // filtre tous les nombres > 2

// boucles
// for "classique"
for (let i = 0; i < arr.length; i++) {
    // ce que tu veux faire
}

// for of
for (const element of arr) {
    //   console.log(element);
}

// comparaisons & opérateurs logiques
// ==    --> à ne jamais utiliser
// console.log(1 == "1"); // true

// ===   --> compare le type en plus de la valeur
// console.log(1 === "1"); // false
// console.log("slt" === "slt"); // true
// console.log([] === []); // false (voir demo.js)

// &&
// console.log(true && console.log("slt!"));

// if (true) console.log("jar"); // pareil que:
// true && console.log("jar2");

// ? statement : statement (opérateur ternaire, équivalent d'un if/else)
// true ? "c true!" : "c false";

// ||
// console.log(true || console.log("slt2!"));
