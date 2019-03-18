/**
 * 167
 * Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
 * The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let index1 = 0,
        index2 = numbers.length - 1
        sum = numbers[index1] + numbers[index2]
    while(sum !== target) {
        if(sum > target) {
            index2--
            sum = numbers[index1] + numbers[index2]
        }else {
            index1++
            sum = numbers[index1] + numbers[index2]
        }
    }
    return [++index1, ++index2]
};