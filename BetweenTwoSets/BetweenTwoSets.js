'use strict';

const fs = require('fs');

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
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
  // Write your code here
  function greatestCommonDivisor(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  function leastCommonMultiple(a, b) {
    return (a * b) / greatestCommonDivisor(a, b);
  }

  function checkLeastCommonMultiple(data) {
    let res = data[0];
    for (let i = 1; i < data.length; i++) {
      res = leastCommonMultiple(res, data[i]);
    }
    return res;
  }

  function checkGreatestCommonDivisor(data) {
    let res = data[0];
    for (let i = 1; i < data.length; i++) {
      res = greatestCommonDivisor(res, data[i]);
    }
    return res;
  }

  let setA = checkLeastCommonMultiple(a);
  let setB = checkGreatestCommonDivisor(b);

  let counter = 0;
  for (let i = setA, j = 1; i <= setB; i = setA * ++j) {
    if (setB % i === 0) {
      counter++;
    }
  }

  return counter;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

  const n = parseInt(firstMultipleInput[0], 10);

  const m = parseInt(firstMultipleInput[1], 10);

  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  const brr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((brrTemp) => parseInt(brrTemp, 10));

  const total = getTotalX(arr, brr);

  ws.write(total + '\n');

  ws.end();
}
