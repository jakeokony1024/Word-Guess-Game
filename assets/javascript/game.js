//Global Variables//
//-----------------------------------------------------------------------------------------------------//

//All Arrays//
var answers = ["frank", "sweet dee", "golden god", "charlie", "toe knife", "kitten mittens"];
var images = ["../Word-Guess-Game/assets/images/Charlie_kelly.jpg", "../Word-Guess-Game/assets/images/frankReynolds.jpg", "../Word-Guess-Game/assets/images/goldenGod.jpg",
    "../Word-Guess-Game/assets/images/Kitten-mittons.jpg", "../Word-Guess-Game/assets/images/sweetDee.jpg", "../Word-Guess-Game/assets/images/toe-knife.jpg"
]
var selectedWord = [""];
var lettersinWord = [];
var blanks = 0;
var blanksandSucesses = [];
var wrongletters = [];

//Game counters//

var winCounter = 0;
var lossCounter = 0;
var guessesLeft = 10;

//Funtions//
//-----------------------------------------------------------------------------------------------------//

function startGame() {

    selectedWord = answers[Math.floor(Math.random() * answers.length)];
    lettersinWord = selectedWord.split("");
    blanks = selectedWord.length;
    //reset game//
    guessesLeft = 10;
    wrongletters = [];
    blanksandSucesses = [];

    //populate right number of blanks//

    for (var i = 0; i < blanks; i++) {
        blanksandSucesses.push("_");
    }

    //Change HTML to show JS//

    document.getElementById("wordtoGuess").innerHTML = blanksandSucesses.join("  ");
    document.getElementById("lettersUsed").innerHTML = [];
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCounter;
    document.getElementById("lossCounter").innerHTML = lossCounter;

}

function checkLetters(letter) {

    var letterinWord = false;

    for (var i = 0; i < blanks; i++) {
        if (selectedWord[i] == letter) {
            letterinWord = true;
        }
    }

    if (letterinWord) {
        for (var i = 0; i < blanks; i++) {
            if (selectedWord[i] == letter) {
                blanksandSucesses[i] = letter;
            }
        }
    }

    else {
        wrongletters.push(letter);
        guessesLeft --
    }

    
}

function roundComplete(){
    
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("wordtoGuess").innerHTML = blanksandSucesses.join("  ");
    document.getElementById("lettersUsed").innerHTML = wrongletters.join("  ");

    if (lettersinWord.toString() == blanksandSucesses.toString()) {
        winCounter ++;
        alert("You Won Jabroni!");
        document.getElementById("winCounter").innerHTML = winCounter;
        var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "../assets/MP3/onYourBike.mp3");
        
        startGame();
    }

    else if (guessesLeft == 0) {
        lossCounter++;
        alert("You Lost Jabroni!");
        document.getElementById("lossCounter").innerHTML = lossCounter;
        startGame();
    }
}



//Main Process//

startGame();

document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    
    roundComplete(); 

}