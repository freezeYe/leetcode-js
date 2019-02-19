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

    let cb = state === 'fulfilled' ? callback.onFulfilled : callback.onRejected,
    if (cb === null) {
        cb = state === 'fulfilled' ? callback.resolve : callback.reject;
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

  }

  Promise.prototype.race = function() {

  }

  Promise.prototype.reduce = function() {

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
