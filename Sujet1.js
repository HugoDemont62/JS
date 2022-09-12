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
//
//const add = (a, b) => {
//    return a + b
//}
//
//console.log(add(4, 6))
//if (person.happy === true){
//    console.log("Vous êtes heureux");
//}else {
//    console.log("Pourquoi t triste enculé ?");
//}
//
//let s = ' {"name": "Hugo", "age": "19 ans", "numbers":[12,17], "happy": false}';
//let person = JSON.parse(s);
//console.log(person.name); // Retourne Hugo
//
//let w = JSON.stringify(person)
//console.log(w);
//
//let t = [1,5,8,4];
//console.log(t.length);
//
//for (let i =0; i<t.length; i++){
//    console.log(i,t[i])
//}
//
//let t2 = [];
//console.log(t2.length);
//
//for (let i = 0; i<10; i++){
//    t.push(i)
//}
//console.log(t[3]+t[5]);
//
//
//function hello() {
//    console.log("Hello");
//}
//hello()
//
//function AfficheResultaDe(g){
//    res = g;
//    console.log("Resultat",res);
//}
//AfficheResultaDe(50)
//
//
//Exo 1 :
//
//let x = 2;
//let y = 3;
//let z = x + y * y;   // 11
//y = x - z; 	         // -9
//x = x - 1;           // 1
//y = y + x * 3;       // -6
//z--; 		         // 10
//x += 10;             // 11
//
//Exo 2 :
//let x = 10;
//let y = 7;
//let z = 13;
//console.log(x,y,z);
//x2 = x;
//x = y;
//y = z;
//z = x2;
//console.log(x,y,z);
//
// Exo 3
//let x = 3;
//let y = 10;
//let z = 7;
//if (x !== y && x !== z) {
//    nb = 3;
//} else if (x === y && z !== x) {
//    nb = 2;
//} else if (x === y && y === z) {
//    nb = 1;
//}
//console.log("Nombre de valeur distinctes : ", nb)
//
//
// Exo 5 (Difficile)(Non en vrai ptdr)
//let tab = [5,6,7,8,9,10];
//tab.push(12);
//console.log(tab);
//console.log(tab.length);
//
// Exo 6
//let tab = [5, 0, 59, 8, 9, 10, 0];
//let bool = false
//for (let i = 0; i < tab.length; i++) {
//    bool = tab[i] === 0;
//    console.log(tab[i], bool);
//    if (bool === true) {
//        console.log("Le tableau comporte un 0, il se situe à là " + i + 1 + "em position, le parcours du tableau est interrompu ")
//        break
//    }
//}
// 2 methode
//for (let i of tab) {
//    bool = i === 0;
//    console.log(i, bool);
//    if (bool === true) {
//        console.log("Le tableau comporte un 0. Le parcours du tableau est interrompu ")
//        break
//    }
//}
//
//let tab = [5, 0, 59, 8, 9, 10, 0];
//let tab2 = [5, 0, 9, 8, 9, 10, 0];
//let bool = false
//if (tab.length === tab2.length) {
//    for (let i = 0; i < tab.length; i++) {
//        if (tab[i] !== tab2[i]) {
//            console.log("Les deux tab sont différents");
//            bool = false
//            break;
//        } else {
//            bool = true
//        }
//    }
//    if (bool === true) {
//        console.log("les deux tableaux sont identiques")
//    }
//}
