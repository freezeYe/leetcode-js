//数组去重
function arryDistinct1(arr) {
    return [...new Set(arr)]
}

function arryDistinct2(arr) {
    return arr.filter((item, index, array) => {
        return index === array.lastIndexOf(item)
    })
}

function arryDistinct3(arr) {
    const temp = []
    arr.forEach(item => {
        if (temp.indexOf(item) === -1) temp.push(item)
    })
    return temp
}

console.log(arryDistinct1([1, 1, 2, 3, 2, 4]))
console.log(arryDistinct2([1, 1, 2, 3, 2, 4]))
console.log(arryDistinct3([1, 1, 2, 3, 2, 4]))
