'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine(), 10);
    var ar = n.toString(2).split('0')
    var temp = 0
    for (var i = 0; i < ar.length; i++) {
        if (temp < ar[i].length) {
            temp = ar[i].length
        }
        if (i + 1 == ar.length) {
            console.log(temp);
        }
    }
}
