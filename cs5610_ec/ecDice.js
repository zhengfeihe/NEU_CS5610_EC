function randomNumber(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

function rollDice(input) {
    const [numDice, numSides] = input.split('d').map(Number);

    if (isNaN(numDice) || isNaN(numSides) || numDice < 1 || numSides < 2) {
        console.error('Invalid input. ');
        return;
    }

    let total = 0;
    for (let i = 0; i < numDice; i++) {
        total += randomNumber(1,numSides);
    }

    console.log(total);
    return total;
}

rollDice('3d6');
rollDice('4d12');
rollDice('1d10');
rollDice('5d4');
