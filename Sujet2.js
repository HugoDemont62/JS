function zeroTrouveDans(tab) {
    for (let i = 0; i < tab.length; i++)
        if (tab[i] == 0)
            return true;
    return false;
}

let t = [12, 5, 0, 13, 9];
let zeroTrouve = zeroTrouveDans(t);
console.log("Trouve : " + zeroTrouve);