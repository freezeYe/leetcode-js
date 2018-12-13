/**
 * 实现compose函数
 * 输入: compose(fn1,fn2,fn3...fnt)
 * 返回: fn
 * 输入: fn(params)
 * 返回: fnt...fn2(fn1(params))
 */

const compose = (...fns) => (...args)=> {
  if(fns.length == 0) return null
  if(fns.length === 1) return fns[0](...args)
  fns.reduceRight((fn1,fn2)=> fn2(fn1(...args)))
}

const classyGreeting = (firstName, lastName) => {
 return "The name's " + lastName + ", " + firstName + " " + lastName
}
const toUpperCase = (str)=> str.toUpperCase()
const c = compose(toUpperCase, classyGreeting)
console.log(c('James', 'Bond')) //=> "THE NAME'S BOND, JAMES BOND"