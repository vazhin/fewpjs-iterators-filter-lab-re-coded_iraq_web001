// Code your solution here
function findMatching(arr, string) {
  return arr.filter(element => element === string.toLowerCase() || element === string.toUpperCase() || element === string.charAt(0).toUpperCase() + string.slice(1))
}

function fuzzyMatch() {
  
}