function Promise(fn) {

  let callbacks = [],
      state = 'pending',
      value = null

  function resolve(_value) {

    if(_value && typeof _value.then === 'function')) {
      const then = _value.then
      then.call(_value, resolve)
    }

    state = 'fullfilled'
    value = _value
    setTimeout(()=> {
      callbacks.forEach(c=> handle(c))
    })
  }

  function handle(callback) {
    if(state === 'pending') {
      callbacks.push(callback)
      return
    }

    if(!callback.onFullfilled) {
      callback.resolve(value)
      return
    }

    const ret = callback.onFullfilled(value)
    callback.resolve(ret)
  }

  this.then(onFullfilled) {
    return new Promise((resolve)=> {
      handle({
        onFullfilled,
        resolve
      })
    })
  }

  fn(resolve)
}

const p = new Promise((resolve)=> {
  let i = 1
  console.log(i)
  setTimeout(()=> {
    console.log(++i)
    resolve(i)
  })
}).then((i)=> ++i).then(i=> console.log(i))
