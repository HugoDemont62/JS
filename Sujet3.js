//let car = {
//    "make": "Tesla",
//    "model": "Model S",
//    "gears": ["P", "N", "R", "D"],
//    "year": 2020
//}
//for (let i = 0; i < car.gears.length; i++) {
//    console.log(car.gears[i]);
//}
//let {critique} = {
//    "name": "QOAK",
//    "realisateur": "Maxime Richard",
//    "acteur": ["H Demont", "M Richard", "K Guerin", "R Leblond", "F Throraval", "E Grand", "G Mirebel"],
//    "critique": [2, 4, 5, 4],
//}
//function moyenne(tab) {
//    let somme = 0;
//    for (let i = 0; i < tab.length; i++) {
//        somme += tab[i];
//    }
//    somme = somme / tab.length;
//    return somme;
//}
//console.log(moyenne(critique));
//
let jsonFile = '{"name":"John","age":30, "city":"New York"}';

let jsonDecrypt = JSON.parse(jsonFile);
console.log(jsonDecrypt.name);
jsonDecrypt.age += 1;

console.log(JSON.stringify(jsonDecrypt));