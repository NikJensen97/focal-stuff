function average(list) {
  var sum = 0;

  for (num of list) {
    sum += num;
  }

  return sum / list.length;
}
console.log(average([10, 15, 25]));
