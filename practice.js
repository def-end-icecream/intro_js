// Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
function printNumbersDivisibleByThree() {
  var index = 1;
  while (index <= 1000) {
    if (index % 3 === 0) {
      console.log(index);
    }
    index += 1;
  }
}
// printNumbersDivisibleByThree();


// Write a method that accepts an array of strings and prints out every other string.
function printEveryOtherItem(strings) {
  var index = 0;
  strings.forEach(function(string) {
    if (index % 2 === 0) {
      console.log(string);
    }
    index += 1;
  });
}
// printEveryOtherItem(["a", "b", "c", "d", "e"]);


// Write a method that accepts an array of numbers and returns the sum.
function computeSum(numbers) {
  var sum = 0;
  numbers.forEach(function(number) {
    sum += number;
  });
  return sum;
}
// console.log(computeSum([2, 4, 5]));

// Start with the hash: city_populations = {chi: 2700000}
// Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
var cityPopulations = {chi: 2700000};
cityPopulations["nyc"] = 8400000;
cityPopulations.sf = 800000;  // same as cityPopulations["sf"]
// console.log(cityPopulations);



// Write a method that prints out every number from 1 to 100. 
function oneToAHundred() {
  var number = 0;
  while (number < 100) {
    number++;
    console.log(number);
  }
}
// oneToAHundred();


// Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).
function oneToAHundredOdd() {
  var number = 0;
  while (number < 100) {
    if (number % 2 === 1) {
      console.log(number);
    }
    number++;
  }
}
// oneToAHundredOdd();


// Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.
function numberOf55s(numbers) {
  var count = 0;
  numbers.forEach(function(number) {
    if (number === 55) {
      count++;
    }
  });
  console.log(count);
}
// numberOf55s([1, 55, 23, 55, 31, 2, 55, 1002, 55]);


// Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].
function awesomesauced(strings) {
  var index = 0;
  var awesomesaucedArray = [];

  while (index < strings.length) {
    awesomesaucedArray.push(strings[index]);
    if (index != strings.length - 1) {
      awesomesaucedArray.push("awesomesauce");
    }
    index++;
  }
  return awesomesaucedArray;
}
// console.log(awesomesauced(["a", "b", "c", "d", "e"]));


// Start with the hash: item_amounts = {chair: 5, table: 2}
// Someone just bought two chairs. Change the hash such that the chair amount is 3.
// The final result should be: {chair: 3, table: 2}
var itemAmounts = {chair: 5, table: 2};
itemAmounts.chair -= 2;
// console.log(itemAmounts);


// Start with the hash: item_amounts = {chair: 5, table: 2}
// You received 7 desks to sell. Change the hash to include desks.
// The final result should be: {chair: 5, table: 2, desk: 7}
var itemAmounts = {chair: 5, table: 2}
itemAmounts.desks = 7;
// console.log(itemAmounts);


// Write a method that accepts a number and returns its factorial.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
function factorial(number) {
  var product = 1;
  while (number > 1) {
    product *= number;
    number--;
  }
  return product;
}
// console.log(factorial(5));


// Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].
function sumStuff(nums1, nums2) {
  nums1.forEach(function(num1) {
    nums2.forEach(function(num2) {
      console.log(num1 + num2);
    });
  });
}

// sumStuff([1, 5, 10], [100, 500, 1000]);


// Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

function selectEvenItems(strings) {
   var result = [];
   var index = 0;
   strings.forEach(function(string) {
     if (index % 2 === 0) {
       result.push(string);
     }
     index++;
   });
   return result;
}

// console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]));

// Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

function max(numbers) {
  var currentMax = numbers[0];
  numbers.forEach(function(number) {
    if (number > currentMax) {
      currentMax = number;
    }
  });
  return currentMax;
}

// console.log(max([5, 4, 8, 1, 2]));

// Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built into Ruby.
function descending(numbers) {
  var result = [];
  var index = numbers.length - 1;
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[index]);
    index--;
  }
  return result;
}

// console.log(descending([1, 3, 5, 7]));