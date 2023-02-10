
// we need to make string1 and string2 into a lowercase and make them in to an arry first
// we need to remove the white space so use split join and split method to remove space and put in in an arry
//just sort them and compare






// exports.isCharacterMatch = function(string1, string2) {

function charac(string1,string2){
  
  let arr1 = string1.toLowerCase().split("")
  let arr2 = string2.toLowerCase().split("")
  let newArr1 = arr1.sort().toString()
  let newArr2 = arr2.sort().toString()
      if(newArr1 === newArr2){
        return true
      }else{
        return false
      }    
}


console.log(charac("match","tcham"))
// exports.anagramsFor = function(word, listOfWords) {

// };

