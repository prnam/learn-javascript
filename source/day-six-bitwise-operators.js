'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function getMaxLessThanK(n, k) {
    let max = 0;
    for (let i = 1; i < n; i++) {
        //    console.log("i: "+ i);
        for (let j = i + 1; j <= n; j++) {
            //    console.log("j: "+ j);
            let bitVal = i & j;
            //    console.log("bitwise value is less than "+ k + " ? ->" +bitVal);
            if (bitVal < k && bitVal > max) {
                max = bitVal;
            }
            //    console.log("Current Max: "+ max);
        }
    }
    return max;
}

function main() {
    const q = +(readLine());

    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);

        console.log(getMaxLessThanK(n, k));
    }
}