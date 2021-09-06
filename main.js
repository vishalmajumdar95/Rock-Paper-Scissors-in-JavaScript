var botScore = 0,
    playerScore = 0;
var rockElement = document.getElementById("rock");
rockElement.onclick = Rock;

function Rock() {
    var bots = getRandom();
    checkWhoWon(bots, "rock");
}
var scissorsElement = document.getElementById("scissors");
scissorsElement.onclick = Scissors;

function Scissors() {
    var bots = getRandom();
    checkWhoWon(bots, "scissors");

}
var paperElement = document.getElementById("paper");
paperElement.onclick = Paper;

function Paper() {
    var bots = getRandom();
    checkWhoWon(bots, "paper");
}

function getRandom() {
    var randomNumber = Math.random();
    var bots = "rock";
    if (randomNumber < .33) {
        bots = "scissors";
    } else if (randomNumber < .6666) {
        bots = "paper";
    }
    return bots;
}

function checkWhoWon(bots, players) {
    if (bots == players) {
        CompleteMessage("There was tie");
    } else if (
        (bots == "scissors" && players == "paper") ||
        (bots == "paper" && players == "rock") ||
        (bots == "rock" && players == "scissors")
    ) {
        BotScore();
    } else {
        PlayerScore();
    }
}

function BotScore() {
    botScore += 1;
    document.getElementById("computerScore").innerHTML = botScore;
    CompleteMessage("Sorry, you're a loser");
}

function PlayerScore() {
    playerScore += 1
    document.getElementById("humanScore").innerHTML = playerScore;
    CompleteMessage("you have played this before huh? Congrats you win!");
}

function CompleteMessage(msg) {
    document.getElementById("status").innerHTML = msg;
}