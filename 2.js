const input = require('./2-input.js')
const { parseInput } = require('./utils.js')
const parsedInput = parseInput(input)
const mappedInput = parsedInput.map(row => ({
    id: row.split(':')[0].replace('Game ', ''),
    data: row.split(':')[1].split(';')
        .map(data => data.split(',')
        .map(color => ({[color.slice(1).split(' ')[1]]: parseInt(color.slice(1).split(' ')[0], 10) })
    )).map(data => {
        let redCount = 0;
        let greenCount = 0;
        let blueCount = 0;
        data.forEach(row => {
            if(row?.red) {
                redCount += row.red
            }
    
            if(row?.green) {
                greenCount += row.green
            }
    
            if(row?.blue) {
                blueCount += row.blue
            }
        } )

        return {red: redCount, green: greenCount, blue: blueCount}
    })
}))

const limit = {
    red: 12,
    green: 13,
    blue: 14
}

const res = mappedInput.filter(game => {
    let pass = true
    game.data.forEach(row => {
        let redCount = 0;
        let greenCount = 0;
        let blueCount = 0;

        if(row?.red) {
            redCount += row.red
        }

        if(row?.green) {
            greenCount += row.green
        }

        if(row?.blue) {
            blueCount += row.blue
        }

        if(redCount > limit.red || greenCount > limit.green || blueCount > limit.blue) {
            pass = false
            return
        }
    })
    return pass

});

console.log(res.map(game => parseInt(game.id, 10)).reduce((prev, curr) => prev+curr))