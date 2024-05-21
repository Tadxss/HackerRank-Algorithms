'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here
  let lowest = arr.slice().sort((a, b) => a - b);
  let highest = arr.slice().sort((a, b) => b - a);
  lowest.pop();
  highest.pop();

  let lowestSum = lowest.reduce((acc, num) => acc + num, 0);
  let highestSum = highest.reduce((acc, num) => acc + num, 0);

  console.log(lowestSum, highestSum);
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
