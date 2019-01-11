/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let value = 0
    for(let i=0;i<s.length;i++) {
        const [pre,next] = [roman[s[i]],roman[s[i+1]]]
        if(!next) value += pre
        else if(pre >= next) {
            value += pre
        }else if(next / pre === 5 || next / pre === 10) {
            value = value + next - pre
            i++
        }else value += pre
        
    }
    return value
};

const roman = {
    'I':             1,
    'V':             5,
    'X':             10,
    'L':             50,
    'C':             100,
    'D':             500,
    'M':             1000
}