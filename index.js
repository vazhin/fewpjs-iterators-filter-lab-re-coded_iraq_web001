// Code your solution here
function findMatching(arr, string) {
  return arr.filter(element => element === string.toLowerCase() || element === string.toUpperCase())
}
