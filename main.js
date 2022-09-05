//L'init d'une valeur ce fait de différentes façons :

//var
//  On déclare une variable, éventuellement en initialisant sa valeur.
//
//let
//  On déclare une variable dont la portée est celle du bloc courant, éventuellement en initialisant sa valeur.
//
//const
//  On déclare une constante nommée, dont la portée est celle du bloc courant, accessible en lecture seule.

//let name = "toto";  let est le moyen de déclaration, name est le nom de la variable et "toto" est la valeur.
//alert("Hello "+ name);

//const add = (a, b) => {
//    return a + b
//}
//
//console.log(add(4, 6))

let s = ' {"name": "Hugo", "age": "19 ans", "numbers":[12,17], "happy": false}';
let person = JSON.parse(s);
console.log(person.name); // Retourne Hugo

let w = JSON.stringify(person)
console.log(w);


if (person.happy = true){
    console.log("Vous êtes heureux");
}else {
    console.log("Pourquoi t triste enculé ?");
}

