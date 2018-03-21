//redux中的核心方法，除去过多校验
export default function createStore(reducer, preLoadState.enhancer) {
	if(enhancer) return enhancer(createStore)(reducer,preLoadState)

	let currentReducer = reducer
	let currentState = preLoadState
	let currentListener = []
	let isDispatching = false

	function getState() {
		return currentState
	}

	function subscribe(listener) {
		if(typeof(listener) !== 'function') {
			throw new Error('listener is not a function')
		}
		currentListener.push(listener)
		return function unsubscribe() {
			const index = currentListener.indexOf(listener)
			currentListener.splice(index,1)
		}		
	}
	function replaceReducer(newReducer) {
		if(typeof(newReducer) !== 'funtcion') throw new TypeError('')
		currentReducer = newReducer
	}
	function dispatch(action) {
		if(typeof(action) !== 'object') throw new TypeError('')
		if(typeof(action.type) === 'undefined') throw  new Error('')
		if(isDispatching) throw new Error('')
		try {
			isDispatching = true
			currentState = currentReducer(currentState,action)
		}finally {
			isDispatching = false
		}	
		const listeners = currentListener
		listeners.forEach(listeren=> listeren())
		return action
	} 

	return {
		dispatch,
		subscribe,
		getState,
		replaceReducer
	}

} 