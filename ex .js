const main = (params) => {
  // Code here
  let primeNumbers = []
  let sum = 0

  function isPrimeNumber(number) {
    var dividers = 0

    for (let count = 1; count <= number; count++)
      if (number % count == 0) dividers++

    if (dividers == 2) return true
    else return false;
  }

  for (let number = 1000; number >= 2; number--) {
    if (isPrimeNumber(number)) {
      primeNumbers.push(number)
      sum += number
    }
  }
  return sum
}
console.log(main());
