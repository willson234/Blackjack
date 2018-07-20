// Defining div variables
var firstDiv = document.getElementById('firstDiv');
var secondDiv = document.getElementById('secondDiv');
var thirdDiv = document.getElementById('thirdDiv')
var cardSumDiv = document.getElementById('cardSumDiv');
var resultDiv = document.getElementById('resultDiv');

// Random number generator
function dealCards(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 // Defining intial card dealing and sum
var firstCard = dealCards(1, 13);
var secondCard = dealCards(1, 13);
var thirdCard = dealCards(1, 13);
var cardSum1  = parseInt(firstCard + secondCard);
var cardSum2 = parseInt(firstCard + secondCard + thirdCard)
var dealerFirst = dealCards(1, 13);
var dealerSecond = dealCards(1, 13);
var dealerThird = dealCards(1, 13);
var dealerSum1 = parseInt(dealerFirst + dealerSecond);
var dealerSum2 = parseInt(dealerFirst + dealerSecond + dealerThird);

// Code following "Start Game" button
function buttonClick() {
    console.log(dealerFirst)
    console.log(dealerSecond)
    console.log(dealerSum1)
    console.log(dealerThird)
    console.log(dealerSum2)
    firstDiv.innerHTML = firstCard;
    secondDiv.innerHTML = secondCard;
    cardSumDiv.innerHTML = cardSum1;
    if (cardSum1 > 21) {
        alert("You lost! The sum of your cards exceeded 21.");
        location.reload();
    } else if (dealerSum1 > 21){
        alert("You win! The sum of the dealer's cards exceeded 21.")
        location.reload();
    } else {
        firstDiv.innerHTML = firstCard;
        secondDiv.innerHTML = secondCard;
        cardSumDiv.innerHTML = cardSum1;
    }
    
}

// If player chooses "Hit"
function buttonHit(){
     if (firstDiv.innerHTML == ""){
            alert("You have to start the game first");
     }else if (secondDiv.innerHTML == ""){
            alert("You have to start the game first");
     }

    firstDiv.innerHTML = firstCard;
    secondDiv.innerHTML = secondCard;
    thirdDiv.innerHTML = thirdCard;
    cardSumDiv.innerHTML = cardSum2;

        if (cardSum2 > 21){
            alert("You lost! The sum of your cards exceeded 21.");
            location.reload();
        } else if (dealerSum1 < 17){
            var dealerSum2 = parseInt(dealerFirst + dealerSecond + dealerThird)
                if (dealerSum2 > 21){
                    alert("You win! The sum of the dealer's cards exceeded 21");
                    location.reload();
                }
        } else {
            firstDiv.innerHTML = firstCard;
            secondDiv.innerHTML = secondCard;
            thirdDiv.innerHTML = thirdCard;
            cardSumDiv.innerHTML = cardSum2;
        }


}

// If player chooses "Stay"
function buttonStay(){
    if (dealerSum2 == 21){
        finalDealerSum = 21
    } else if (dealerSum2 > 21){
        var finalDealerSum = dealerSum1;
    } else {
        var finalDealerSum = dealerSum2;}
    if (cardSum2 == 21){
        var finalCardSum = 21
    } else if (cardSum2 > 21){
        var finalCardSum = cardSum1;
    } else {
        var finalCardSum = cardSum2;
    }
    if (finalCardSum == finalDealerSum){
        alert("You tied with the dealer.")
        location.reload()
    } else if (finalCardSum > finalDealerSum){
        alert("You win! You were closer to 21 than the dealer was.");
        location.reload();
    } else if (finalCardSum == 21){
        alert("You win! The sum of your numbers was 21!");
        location.reload();
    } else {
        alert("You lost! The dealer was closer to 21 than you were");
        location.reload();
    }
}

// Code following "Restart Game" button
function buttonRestart(){
    location.reload();
}
