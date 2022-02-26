function generateNumbers(amount) {
    let numbers = []

    for (let i = 1; i <= amount; i++) {
        let newNumber = parseInt(Math.random() * (60 - 1)) + 1
        
        if(numbers.includes(newNumber) === false) {
            numbers.push(newNumber)
        } 
    }

    return numbers
}

console.log(generateNumbers(8))