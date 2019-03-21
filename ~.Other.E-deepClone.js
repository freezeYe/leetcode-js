function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) return obj
  if (obj instanceof Array) {
    return obj.reduce((copy, item) => {
      copy.push(deepClone(item))
      return copy
    }, [])
  }
  return Reflect.ownKeys(obj).reduce((copy, key) => {
    copy[key] = deepClone(obj[key])
    return copy
  }, {})
}