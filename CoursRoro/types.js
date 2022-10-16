// number (primitive)
// string (pritimive)
// boolean (primitive)
// array (primitive)
// object (non primitive)

const number = 1;
const string = "jar";
const boolean = true;
const array = ["slt", false, 12, {}, []];
const objet = {key: "value"};

let tab = [
    {nom: "dubois"},
    {prenom: "vincent"}
];

const tab2 = [
    {
        nom: "dubois",
        prenom: "vincent",
    },
    {
        nom: "Leblond",
        prenom: "Romain",
    },
];

const combinedNames = tab2.map(obj => `${obj.prenom} ${obj.nom}`); //
const combinedNames2 = tab2.map(obj => obj.prenom + " " + obj.nom); //
console.log(combinedNames);

tab2[0].nom;
// tab2[0]  --> sélectionne le premier élément du tableau, donc ici un objet
// tab2[0].nom --> sélectionne le nom de
