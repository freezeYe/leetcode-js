function Promise(fn) {

  let callbacks = [],
      state = 'pending',
      value = null

  function resolve(_value) {

    if(_value && typeof _value.then === 'function')) {
      const then = _value.then
      then.call(_value, resolve)
      return
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

    let cb = state === 'fullfilled' ? callback.onFulfilled : callback.onRejected,
    if (cb === null) {
        cb = state === 'fullfilled' ? callback.resolve : callback.reject;
        cb(value);
        return;
    }
    ​ try {
      ​ const ret = cb(value);
      ​ callback.resolve(ret);
      ​ } catch (e) {
      ​ callback.reject(e);
      
    }
  }

  function reject(reason) {
    state = 'rejected'
    value = reason
    execute()
  }

  function execute() {
    setTimeout(function () {
        callbacks.forEach(function (callback) {
            handle(callback);
        });
    }, 0);
  }

  Promise.prototype.then = function(onFullfilled, onRejected) {
    return new Promise((resolve)=> {
      handle({
        onFullfilled,
        onRejected,
        reject,
        resolve
      })
    })
  }

  Promise.prototype.catch = function(reject) {
    this.then(resolve, reject)
  }

  Promise.prototype.race = function(arr) { 
    return new Promise((resolve, reject)=> {
      if(arr.length === 0) reject('input rece promises!')
      arr.forEach((a)=> {
        resolve(a)
      })
    })
  }

  Promise.prototype.all = function(arr) {
    let len = arr.length
    const result = []
    return new Promise(function (resolve, reject) {
      arr.forEach((a, index)=> {
        if(a && typeof a.then === 'function') {
          a.then((data)=> {
            result[index] = data
            len--
            if(len === 0) resolve(result)
          }, (data)=> reject(data))
        }else {
          result[index] = a
          len--
          if(len === 0) resolve(result)
        }
      })
    })
  }
  fn(resolve, reject)
}

const p = new Promise((resolve)=> {
  let i = 1
  console.log(i)
  setTimeout(()=> {
    console.log(++i)
    resolve(i)
  })
}).then((i)=> ++i).then(i=> console.log(i))
