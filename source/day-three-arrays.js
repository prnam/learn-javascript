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

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    let arrayNumbers = nums.sort(function (a, b) {
        return b - a;
    });
    let secondLargest = 0;
    for (var i = 0; i < arrayNumbers.length; i++) {
        let temp = i;
        if (arrayNumbers[i] > arrayNumbers[temp + 1]) {
            secondLargest = arrayNumbers[temp + 1]
            break;
        }

    }
    return secondLargest;

}

function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);

    console.log(getSecondLargest(nums));
}

