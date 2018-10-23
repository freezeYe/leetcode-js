// 一次买入，一次卖出
// 求解：求最大差值
function stock_sell_once(arr) {
	if(arr.length < 2) return 0
	let profit = 0
	let minPrice = arr[0]
	for(let i = 1; i < arr.length; i++) {
		minPrice = Math.min(minPrice, arr[i])
		profit = Math.max(profit, arr[i] - minPrice)
	}
	return profit
}
function stock_sell_once_recursive(arr,pre=0,minPrice=Number.MAX_SAFE_INTEGER,profit=0) {
	if(arr.length < 2) return 0
	if(pre == arr.length) return profit
	return stock_sell_once_recursive(arr,pre+1,minPrice=Math.min(minPrice,arr[pre]),profit=Math.max(profit,arr[pre] - minPrice))
}


//不限次交易,每次手握一股,当天可买入卖出
//求解：贪心，价格高于前一天则卖出后再买入
function stock_sell_mutil_greedy(arr) {
	if(arr.length < 2) return 0
	let profit = 0,
		curPrice = arr[0]
	for(let i = 1; i < arr.length; i++ ) {
		if(curPrice < arr[i]) {
			profit += arr[i] - curPrice
		}
		curPrice = arr[i]
	}
	return profit
}
function stock_sell_mutil_recursive(arr,cur=0,total=0) {
	if(arr.length < 2) return 0
	if(cur == arr.length) return total
	if(arr.length == 2) return Math.max(total + arr[cur+1] - arr[cur] , total)
	return stock_sell_mutil_recursive(arr,cur+1, total + Math.max((arr[1] - arr[0] , 0)))
}

//最多两次交易
//求解: 取第一次卖出时机i，分别计算前后最大差值和的最大值
function stock_sell_twice_recursive(arr) {
	if(arr.length < 2) return 0
	let profit = 0
	for(let i=1; i<arr.length-1; i++) {
		profit = Math.max(profit,stock_sell_once_recursive(arr.slice(0,i))+stock_sell_once_recursive(arr.slice(i)))
	}
	return profit
}	
function stock_sell_twice_dp(arr) {
	if(arr.length < 2) return 0
	const forward = new Arry(arr.length).fill(0), backward = new Arry(arr.length).fill(0)
	let min_point = arr[0]	
	for(let i=1; i<arr.length; i++) {
		min_point = Math.min(min_point,arr[i])
		forward[i] = Math.max(forward[i-1],arr[i]-min_point)
	}
	let max_point = arr[arr.length-1]
	for(let i=arr.length - 2; i >= 0; i++) {
		max_point = Math.max(max_point,arr[i])
		backward[i] = Math.max(backward[i+1],max_point - arr[i]) 
	}	
	let profit = 0
	for(let i=0;i<arr.length;i++) {
		profit = Math.max(profit,forward[i] + backward[i])
	}
	return profit
}











