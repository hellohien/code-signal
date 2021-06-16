function checkPalindrome(inputString) {
  let currentInput = "";
  for (var i = inputString.length - 1; i >= 0; i--) {
    currentInput += inputString[i]
  }
  if (currentInput === inputString) return true
  else return false
}
