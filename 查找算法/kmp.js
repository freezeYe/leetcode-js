/**
 * KMP算法(看毛片)
 * @parma s 原字符串
 * @parma w 匹配串
 * @return {number} 匹配索引
 */

function kmp(s,w) {
	let i = 0,
		j = 0
	const _next = next(w)
	while(i < s.length) {
		while(j!== -1 && s[i] !== w[j]) {
			j = _next[j]
		}
		if(j == w.length-1){
			return i
		}else {
			i++
			j++
		}
	}
	return -1
}

function next(w) {
	const _next = [-1]
	let i,j = 1
	while(j < w.length) {
		i =_next[j-1]
		while(i !== -1 && w[i] !== w[j]) {
			i = _next[i]
		}
		_next[j] = i+1
		j++
	}
	return _next
} 

console.log(kmp('ABC ABCDAB ABCDABCDABDE','ABCDABD'))