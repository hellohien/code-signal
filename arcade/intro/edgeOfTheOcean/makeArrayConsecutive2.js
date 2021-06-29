function makeArrayConsecutive2(statues) {
  let sortedStatues = statues.sort((a, b) => a - b)
  let counter = 0;
  for (let i = 0; i < sortedStatues.length - 1; i++) {
    let statuesNeeded = sortedStatues[i + 1] - (sortedStatues[i] + 1);
    counter += statuesNeeded;
  }
  return counter;
}
