/**
 * 383
 * Given an arbitrary ransom note string and another string containing letters from all the magazines,
 * write a function that will return true if the ransom note can be constructed from the magazines ; 
 * otherwise, it will return false.
 * Each letter in the magazine string can only be used once in your ransom note.
 * input:
 * canConstruct("a", "b") -> false
 * canConstruct("aa", "ab") -> false
 * canConstruct("aa", "aab") -> true
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  if(magazine.length < ransomNote){
      return false;    
  }
  for(let letter of ransomNote){
      let tempMagasin = magazine.replace(letter, ''); 
      if(tempMagasin===magazine){ 
          return false
      }
      magazine = tempMagasin; 
  }
  
  return true
};