function centuryFromYear(year) {
  if (year < 1 || year > 2005) {
    return;
  }
  return Math.ceil(year / 100)
}
