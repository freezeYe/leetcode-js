/*
 * redux 核心方法 
 * 去除多余的校验，看起来更加清爽
 **/

// 初始化时的action类型,用于reducer执行时返回默认state
const ActionTypes = {
	INIT: '@@redux/INIT'
} 

//创建store
function createStore(reducer, preLoadState.enhancer) {

	if(typeof(preLoadState) === 'function' && enhancer === undefined) enhancer = preLoadState
	if(enhancer) return enhancer(createStore)(reducer,preLoadState)

	let currentReducer = reducer,
		currentState = preLoadState,
		currentListener = [],
		isDispatching = false

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
		dispatch({type: ActionTypes.INIT})
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

	dispatch({ type: ActionTypes.INIT })

	return {
		dispatch,
		subscribe,
		getState,
		replaceReducer
	}

} 

/*
 * 组合多个reducer，返回新的reducer
 * 结果用来传入createStore
 * 可用于按组来分割
 */
function combineReducers(reducers) {
	//用于校验reducer有初始state返回并设置默认state值
	function assertReducerShape(reducers) {
		Object.values(reducers).forEach((reducer)=> {
			if(reducer(undefined,{type:ActionTypes.INIT}) === undefined) throw new Error('')
		})
	}
	const finalReducers {}
	for(let key in reducers) {
		if(typeof(reducers[key]) === 'function') finalReducers[key] = reducers[key]
	}
	let assertError = null
	try{
		assertReducerShape(finalReducers) 
	}catch(e) {
		assertError = e
	}
	return combination(state={}, action) {
		if(assertError) throw assertError
		const nextState = {}
		const keys = Object.keys(finalReducers)
		let hasChanged = false
		keys.forEach(key=> {
			const reducer = finalReducers[key]
			const prevStateForKey = state[key]
			const nextStateForKey = reducer(prevStateForKey,action)
			if(nextState === undefined) {
				throw new Error('')
			}
			nextState[key] = nextStateForKey
			hasChanged = hasChanged || nextStateForKey !== prevStateForKey
		})
		return hasChanged ? nextState : state
	}
}









