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
//let jsonFile = '{"name":"John","age":30, "city":"New York"}';
//
//let jsonDecrypt = JSON.parse(jsonFile);
//console.log(jsonDecrypt.name);
//jsonDecrypt.age += 1;
//
//console.log(JSON.stringify(jsonDecrypt));
//let etudiant1 = {
//    "nom": "Guerin",
//    "prenom": "Killian",
//    "age": 19,
//    "web": [15, 12, 10, 9, 15],
//    "com": [11, 11, 13, 10, 10],
//    "audiovisuel": [16, 13, 14, 13, 14]
//}
//let etudiant2 = {
//    "nom": "Sido",
//    "prenom": "Corentin",
//    "age": 20,
//    "web": [9, 3, 20, 16, 15],
//    "com": [18, 16, 13, 16, 15],
//    "audiovisuel": [12, 13, 11, 16, 10]
//}
//
//function ficheEtudiant(etudiant) {
//    console.log(etudiant.nom +" "+ etudiant.prenom +" ("+ etudiant.age + ") ");
//    console.log("Note de :");
//    console.log(etudiant.com())
//    console.log(etudiant.web())
//}
//ficheEtudiant(etudiant1);