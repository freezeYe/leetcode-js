//冒泡排序
const bubbleSort = (arr)=> {
	let T = true
	while(T) {
		T = false
		for(let i=0; i< arr.length-1; i++) {
			if(arr[i] > arr[i+1]) {
				const tmp = arr[i+1]
				arr[i+1] = arr[i]
				arr[i] = tmp
				T = true
			}
		}
	}
	return arr
}

console.log(bubbleSort([2,1,4,6,5,3]))