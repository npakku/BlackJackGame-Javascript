

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageLog = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    "name": "Pascal",
    "chips": 200
}

let playerEl = document.getElementById("player-el")

playerEl.innerHTML = player.name + ": $" +  player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if (randomNumber === 1){
        return 11
    }

    else if (randomNumber >= 11 && randomNumber <=13){
        return 10
    }

    return randomNumber
}

console.log(getRandomCard())


function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){

    cardsEl.innerHTML = "CARDS: "

    for(let i = 0; i < cards.length; i++){
        cardsEl.innerHTML += cards[i] + " "
    }

    sumEl.innerHTML = "Sum: " + sum
    if (sum < 21){

        message = "Do you wish to draw a new card again ?"
    }

    else if (sum === 21){
        message = "You've got BlackJack!"
       
        hasBlackJack = true
    }

    else {

        message = "We are logging out"
      
        isAlive = false
    }
    
    messageLog.innerText = message   
    
}

function newCard(){
    
    if (isAlive == true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
        
    }
 
}

console.log(cards)



