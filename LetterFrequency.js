let input = ""
let output = new Object()

function LetterFrequency(input) {
    let letters = ""
    for (let i = 0; i < input.length; i++) {
        if (letters.includes(input[i]) === false) {
            letters += input[i]
        }
    } let keys = letters.split("")
    for (let j = 0; j < keys.length; j++) {
        output[keys[j]] = input.split(keys[j]).length - 1
    } return output
}