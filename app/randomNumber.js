const smallestValue = 1
const highestValue = 100
const randomNumber = generateRandomNumber()
const smallestValueElement = document.getElementById('smallest-number')
const highestValueElement = document.getElementById('highest-number')

function generateRandomNumber (){
    return parseInt(Math.random() * highestValue + 1)
}

console.log('Secret number:', randomNumber)

smallestValueElement.innerHTML = smallestValue
highestValueElement.innerHTML = highestValue


