function adjacentElementsProduct(inputArray) {
  let maxProd = -Infinity
  let currentProd = -Infinity
  let prevNum = 0
  let currentNum = 0
  for (let i = 0; i < inputArray.length; i++) {
    currentNum = inputArray[i]
    prevNum = inputArray[i - 1]
    currentProd = currentNum * prevNum
    if (maxProd < currentProd) {
      maxProd = currentProd
    }
  }
  return maxProd
}
