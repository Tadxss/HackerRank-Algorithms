'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'getMinCost' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY crew_id
 *  2. INTEGER_ARRAY job_id
 */

function getMinCost(crew_id, job_id) {
    // Write your code here
    crew_id.sort((a, b) => a - b);
    job_id.sort((a, b) => a - b);
    
    let totalCost = 0;
    for(let i = 0; i < crew_id.length; i++) {
        totalCost += Math.abs(crew_id[i] - job_id[i]);
    }
    
    console.log(totalCost);
    return totalCost;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const crew_idCount = parseInt(readLine().trim(), 10);

    let crew_id = [];

    for (let i = 0; i < crew_idCount; i++) {
        const crew_idItem = parseInt(readLine().trim(), 10);
        crew_id.push(crew_idItem);
    }

    const job_idCount = parseInt(readLine().trim(), 10);

    let job_id = [];

    for (let i = 0; i < job_idCount; i++) {
        const job_idItem = parseInt(readLine().trim(), 10);
        job_id.push(job_idItem);
    }

    const result = getMinCost(crew_id, job_id);

    ws.write(result + '\n');

    ws.end();
}
