// 1. Write a function that takes in an array of numbers and returns its sum.
function sum(numbers) {
  var result = 0;
  var index = 0;
  while (index < numbers.length) {
    result += numbers[index];
    index += 1;
  }
  return result;
}

console.log(sum([1, 2, 3]));

// 2. Write a function that takes in an array of strings and returns the smallest string.
function smallestString(strings) {
  var result = strings[0];
  var index = 0;
  while (index < strings.length) {
    if (strings[index].length < result.length) {
      result = strings[index];
    }
    index += 1;
  }
  return result;
}

console.log(smallestString(["apple", "orange", "grapes"]));

// 3. Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.
function reversedNumbers(numbers) {
  var result = [];
  var index = numbers.length - 1;
  while (index >= 0) {
    result.push(numbers[index]);
    index -= 1;
  }
  return result;
}

console.log(reversedNumbers([1, 2, 3]));

// 4. Write a function that takes in an array of words and returns the number of words that begin with the letter "a".
function aWords(words) {
  var result = 0;
  var index = 0;
  while (index < words.length) {
    if (words[index][0] === "a") {
      result += 1;
    }
    index += 1;
  }
  return result;
}

console.log(aWords(["apple", "orange", "grapes"]));

// 5. Write a function that takes in an array of strings and joins them together to make a single string separated by commas.
function joinWithCommas(strings) {
  var result = "";
  var index = 0;
  while (index < strings.length) {
    result += strings[index] + ",";
    index += 1;
  }
  return result;
}

console.log(joinWithCommas(["apple", "orange", "grapes"]));

// 6. Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).
function product(numbers) {
  var result = 1;
  var index = 0;
  while (index < numbers.length) {
    result = result * numbers[index];
    index += 1;
  }
  return result;
}

console.log(product([1, 2, 3, 4]));

// 7. Write a function that takes in an array of numbers and returns the two smallest numbers.
function twoSmallestNumbers(numbers) {
  var smallestIndex = 0;
  var smallest = numbers[smallestIndex];
  var index = 0;
  while (index < numbers.length) {
    if (numbers[index] < smallest) {
      smallest = numbers[index];
      smallestIndex = index;
    }
    index += 1;
  }
  var secondSmallest = numbers[smallestIndex + 1];
  index = 0;
  while (index < numbers.length) {
    if (numbers[index] < secondSmallest && index !== smallestIndex) {
      secondSmallest = numbers[index];
    }
    index += 1;
  }
  return [smallest, secondSmallest];
}

console.log(twoSmallestNumbers([1, 10, 9, 3, 23, 12]));

// 8. Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.
function zeroCount(numbers) {
  var result = 0;
  var index = 0;
  while (index < numbers.length) {
    if (numbers[index] === 0) {
      result += 1;
    }
    index += 1;
  }
  return result;
}

console.log(zeroCount([9, 32, 0, 2, 0, 12, 5, 2, 0, 1]));

// 9. Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.
function isAllBig(numbers) {
  var result = true;
  var index = 0;
  while (index < numbers.length) {
    if (numbers[index] <= 10) {
      result = false;
    }
    index += 1;
  }
  return result;
}

console.log(isAllBig([11, 23, 32]));

// 10. Write a function that takes in an array of words and returns the number of times the letter "a" appeared in total.
function aCount(words) {
  var result = 0;
  var index = 0;
  while (index < words.length) {
    var word = words[index];
    var index2 = 0;
    while (index2 < word.length) {
      if (word[index2] === "a") {
        result += 1;
      }
      index2 += 1;
    }
    index += 1;
  }
  return result;
}

console.log(aCount(["apple", "orange", "grapes"]));