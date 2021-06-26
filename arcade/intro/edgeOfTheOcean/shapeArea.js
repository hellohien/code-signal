function shapeArea(n) {
  let area = 0;
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      area = 1
    }
    area += ((i - 1) * 4)
  }
  return area;
}
