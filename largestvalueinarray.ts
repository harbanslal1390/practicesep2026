var arrayval: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

if (arrayval.length < 2) {
  console.log("Array needs at least two values to find the second largest number.")
} else {
  let maxValue = Number.NEGATIVE_INFINITY
  let secondMax = Number.NEGATIVE_INFINITY

  for (const value of arrayval) {
    console.log("the value of array is :" + value)

    if (value > maxValue) {
      secondMax = maxValue
      maxValue = value
    } else if (value > secondMax && value !== maxValue) {
      secondMax = value
    }
  }

  if (secondMax === Number.NEGATIVE_INFINITY) {
    console.log("There is no distinct second largest number in the array.")
  } else {
    console.log("The maximum value in the array is :" + maxValue)
    console.log("The second largest value in the array is :" + secondMax)
  }
}
