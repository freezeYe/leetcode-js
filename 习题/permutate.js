//全排列
function perm1(A) {
    if (A.length === 1) { return [A] }
    return [].concat(...A.map((a, i) => perm(A.slice(0, i)
        .concat(A.slice(i + 1)))
        .map(p => [a].concat(p))))
}
console.log(perm(['a', 'b', 'c']))
