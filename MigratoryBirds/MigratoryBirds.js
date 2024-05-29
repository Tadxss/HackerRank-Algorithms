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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
  // Write your code here
  const birdFrequency = {};

  for (const bird of arr) {
    if (birdFrequency[bird]) {
      birdFrequency[bird]++;
    } else {
      birdFrequency[bird] = 1;
    }
  }

  let maxCount = 0;
  let minType = Number.MAX_SAFE_INTEGER;

  for (const bird in birdFrequency) {
    const count = birdFrequency[bird];
    const birdType = parseInt(bird, 10);

    if (count > maxCount || (count === maxCount && birdType < minType)) {
      maxCount = count;
      minType = birdType;
    }
  }

  return minType;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arrCount = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = migratoryBirds(arr);

  ws.write(result + '\n');

  ws.end();
}
