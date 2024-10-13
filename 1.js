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

const getFirstNumber = (str) => {

    for(i=0;i<=str.length;i++) {
        if(String(parseInt(str[i], 10)) !== 'NaN') {
            return str[i]
        }

        const match = Object.keys(numberMap).find(num => str.slice(i).startsWith(num))
        
        if (!!match) {
            console.log('first', str, numberMap[match])    
            return numberMap[match]
        }
    }
}

const getLastNumber = (str) => {

    for(i=str.length;i>=0;i--) {
        if(String(parseInt(str[i], 10)) !== 'NaN') {
            return str[i]
        }

        const match = Object.keys(numberMap).find(num => str.slice(i).startsWith(num))
        if (!!match) {
            console.log('last', str, numberMap[match])
            return numberMap[match]
        }
    }

}

const getRowNumber = (row) => parseInt(`${getFirstNumber(row)}${getLastNumber(row)}`, 10)

let sum = 0;

parsedInput.forEach(row => {
    sum +=getRowNumber(row)
})

console.log(sum)