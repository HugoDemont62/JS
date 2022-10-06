let m = [
    [2,3,5],
    [5,6,7],
    [1,4,8]
];

let t = m.flat();
console.log(t)
//  2, 3, 5, 5, 6,
//  7, 1, 4, 8

w = t.find(function (v) {
    return v % 2 == 0;
});

console.log(w)