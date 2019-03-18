/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
 * Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
 * 输入: [7,1,5,3,6,4]
 * 输出: 7
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  return prices.reduce((a,b,index)=> {
      if(index == 0) return {total:0,p:b}
      else {
          if(b > a.p) return {total: a.total+b-a.p,p:b}
          else return {total:a.total,p:b}
      }
  },{total:0,p:0}).total
};