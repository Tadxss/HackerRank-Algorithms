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
 * Complete the 'minTime' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY files
 *  2. INTEGER numCores
 *  3. INTEGER limit
 */

function minTime(files, numCores, limit) {
    let equalCores = [];
    
    for (let i = 0; i < files.length; i++) {
        if(files[i] % numCores === 0) {
            equalCores.push(files[i]);
            files.splice(i, 1);
            i--;
        }
    }
    
    if(equalCores.length > limit) {
        equalCores.sort((a, b) => b - a);
        for (let i = 0; i < limit; i++) {
            equalCores[i] = equalCores[i] / numCores;
        }
    } else {
        for (let i = 0; i < equalCores.length; i++) {
            equalCores[i] = equalCores[i] / numCores;
        }
    }
    
    let list = files.concat(equalCores);
    
    return Math.floor(list.reduce((sum, time) => sum + time, 0));
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const filesCount = parseInt(readLine().trim(), 10);

    let files = [];

    for (let i = 0; i < filesCount; i++) {
        const filesItem = parseInt(readLine().trim(), 10);
        files.push(filesItem);
    }

    const numCores = parseInt(readLine().trim(), 10);

    const limit = parseInt(readLine().trim(), 10);

    const result = minTime(files, numCores, limit);

    ws.write(result + '\n');

    ws.end();
}
