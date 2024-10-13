const input = require('./1-input.js')
const { parseInput } = require('./utils.js')
const parsedInput = parseInput(input)

const numberMap = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
}

const reformatRow = (row => 
    Object.keys(numberMap).reduce((prev, curr) => {
        const currentRow = prev.replaceAll(curr, String(numberMap[curr]));
        return currentRow
    }, row)
)

const reformatInput = input => input.map(row => reformatRow(row))


const getFirstNumber = (str) => {
    for(i=0;i<=str.length;i++) {
        if(String(parseInt(str[i], 10)) !== 'NaN') {
            return str[i]
        }
    }
}

const getLastNumber = (str) => {
    for(i=str.length;i>=0;i--) {
        if(String(parseInt(str[i], 10)) !== 'NaN') {
            return str[i]
        }
    }
}

const getRowNumber = (row) => parseInt(`${getFirstNumber(row)}${getLastNumber(row)}`, 10)

let sum = 0;

reformatInput(parsedInput).forEach(row => {sum +=getRowNumber(row)})


reformatInput(parsedInput).forEach((row, index) => console.log( parsedInput[index] + '\n' + reformatInput(parsedInput)[index] + '\n' + getRowNumber(row) + '\n---------------\n'))

console.log(sum)