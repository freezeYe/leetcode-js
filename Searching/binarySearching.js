/**
 * 给定一个顺序表，查找关键词value索引
 * 输入: arr = [1,4,7,11], value = 4
 * 输出: return 1
 */
const binarySearching = (arr, value,low = 0,high)=> {
    if(high === undefined) high = arr.length - 1
    if(low === high-1 && arr[low] !== value && arr[high] !== value) return null
    const mid = parseInt((low + high) / 2)
    if(arr[mid] === value) return mid
    if(arr[mid] > value) return binarySearching(arr, value, low, mid)
    return binarySearching(arr, value, mid, high)
}