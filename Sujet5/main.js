let etudiant1 = {
    "nom": "Guerin",
    "prenom": "Killian",
    "age": 19,
    "web": [15, 12, 10, 9, 15],
    "com": [11, 11, 13, 10, 10],
    "audiovisuel": [16, 13, 14, 13, 14]
}
let etudiant2 = {
    "nom": "Sido",
    "prenom": "Corentin",
    "age": 20,
    "web": [9, 3, 20, 16, 15],
    "com": [18, 16, 13, 16, 15],
    "audiovisuel": [12, 13, 11, 16, 10]
}

function buildCard(etudiant) {
    let div = document.createElement("div");
    const {prenom, nom, age, web, com, audiovisuel} = etudiant
    div.append(`${prenom} ${nom} (${age})`)
    const ul =document.createElement('ul')
    const createLi = () => document.createElement('li')
    const li = createLi()
    const li2 = createLi()
    const li3 = createLi()
    li.append(web)
    li2.append(com)
    li3.append(audiovisuel)
    ul.append(li, li2, li3)
    div.append(ul)
    return div;
}

let etudiants = [etudiant1, etudiant2];
for (let etudiant of etudiants) {
    let d = buildCard(etudiant)
    document.getElementById('root').append(d);
}

let b = document.querySelector('button');
b.onclick = () => {
    let divs = document.querySelectorAll("#root div")
    for (let div of divs)
        div.classList.toggle("hidden");
}