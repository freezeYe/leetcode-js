/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.min = Infinity;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(this.min >= x) {
        this.stack.push(this.min)
        this.min = x
    }
    this.stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const value = this.stack.pop();
    if(value == this.min) {
        this.min = this.stack.pop()
    }
    return value
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min
};