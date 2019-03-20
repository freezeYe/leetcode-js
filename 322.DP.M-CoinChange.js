/**
 * You are given coins of different denominations and a total amount of money amount. 
 Write a function to compute the fewest number of coins that you need to make up that amount. 
 If that amount of money cannot be made up by any combination of the coins, return -1.
 Input: coins = [1, 2, 5], amount = 11
 Output: 3 
 Explanation: 11 = 5 + 5 + 1
 **/
 
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const m = coins.length
    const dp = new Array(m).fill(0).map(()=> [])
    for(let i=0; i<m; i++) {
        dp[i][0] = 0
    }
    for(let i=1; i<=amount; i++) {
        dp[0][i] = dp[0][i-coins[0]] != undefined ? dp[0][i-coins[0]] + 1 : Infinity
    }
    for(let i=1; i<m; i++) {
        for(let j=1; j<=amount; j++) {
            if(j - coins[i] < 0) {
                dp[i][j] = dp[i-1][j]
            }else {
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-coins[i]] + 1)
            }
        }
    }
    return dp[coins.length - 1][amount] != Infinity ? dp[coins.length - 1][amount] : -1
};

//空间优化
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const m = coins.length
    const dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for(let i=1; i<=amount; i++) {
        for(let j=0; j<m; j++) {
            if(i >= coins[j]){
                dp[i] = Math.min(dp[i], dp[i-coins[j]] + 1)
            }
        }
    }
    
    return dp[amount] > amount ? -1 : dp[amount]
};
