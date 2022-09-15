//function zeroTrouveDans(tab) {
//    for (let i = 0; i < tab.length; i++)
//        if (tab[i] == 0)
//            return true;
//    return false;
//}
//let t = [12, 5, 0, 13, 9];
//let zeroTrouve = zeroTrouveDans(t);
//console.log("Trouve : " + zeroTrouve);
//
//Exo 1
//function note(int){
//    if (int >= 16) {
//        return "Très bien";
//    }else if (int < 16 && int >= 14){
//        return "Bien";
//    }else if (int < 14 && int >= 12){
//        return "Assez bien";
//    }
//}

//Exo 2
//function sommeTab(tab){
//    let somme = 0;
//    for (var i = 0; i < tab.length; i++){
//        somme = somme + tab[i];
//    }
//    console.log(somme);
//}
//
//let t2 = [2, 15, 13, 19];
//sommeTab(t2);

//Exo 3
// let t1 = [1, 2, 3];
// let t2 = [2, 5, 6];
// let t3 = [3, 6, 9];
// let m = [t1, t2, t3];
// function symétrie(tab) {
// for (let i = 0; i < tab.length; i++) {
// for (let j = 0; j < tab.length; j++) {
// if (tab[i][j] != tab[j][i]) {
// return false;
// }
// }
// } return true;
// }
// let result = symétrie(m);
// console.log(result);


// Exo 6

//function g(f,v){
//    let res = f(v);
//    console.log("res",res);
//    return res;
//
//}
//function carre(x) {
//    return x * x;
//}
//
//let r = g(carre,10);
//console.log("resultat de g ", r);
