// Code your solution here
function findMatching(arr, string) {
  return arr.filter(element => element === string || element === string.toUpperCase())
}
