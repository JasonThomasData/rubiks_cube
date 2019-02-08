var screenHeight = window.screen.availHeight * 0.66;
var cube = TTk.AlgorithmPuzzle(3);
var cubeMoveHistory = [];
var userInputAlgorithm = [];
var sides = ["F", "B", "U", "D", "R", "L", "F'", "B'", "U'", "D'", "R'", "L'"]

function getRandomSide() {
    return sides[Math.floor(Math.random() * sides.length)];
}

function getRandomMove() {
    var randomSide = getRandomSide();
    return randomSide;
}

function getNewRandomAlgorithm(numberOfTurns) {
    var algorithm = [];
    for(var i = 0; i < numberOfTurns; i++) {
        var move = getRandomMove();
        algorithm.push(move);
    }
    return algorithm;
}

function makeNewAlgorithm(algorithm) {
    return cubeMoveHistory.concat(algorithm);
}

function randomiseCube(numberOfTurns) {
    var algorithm = getNewRandomAlgorithm(+numberOfTurns);
    cubeMoveHistory = makeNewAlgorithm(algorithm);
}

function removeInvalidInputs(userInputAlgorithm) {
    return userInputAlgorithm.filter(elem => sides.includes(elem));
}

function drawCube(algorithm) {
    document.getElementById("cube_viz").innerHTML = "";

    cube.showAlg(false)
        .controls(false)
        .size({width:screenHeight, height:screenHeight})
        .alg(algorithm)
        ('#cube_viz');

    cube.moveTo(cubeMoveHistory.length);
    if(userInputAlgorithm.length > 0) {
        cube.play();
    }
}

document.getElementById("read").onclick = function() {
    var userAlgorithmString = document.getElementById("algorithm").value.trim();
    userInputAlgorithm = userAlgorithmString.replace(/\n/g," ").split(" ");
    userInputAlgorithm = removeInvalidInputs(userInputAlgorithm);
    var algorithmForDisplay = cubeMoveHistory.join(" ") + " " + userInputAlgorithm.join(" ");
    drawCube(algorithmForDisplay);
}

document.getElementById("clear").onclick = function() {
    document.getElementById("algorithm").value = "";
    userInputAlgorithm = [];
}

document.getElementById("commit").onclick = function() {
    cubeMoveHistory = makeNewAlgorithm(userInputAlgorithm);
}

var randomiseButtons = document.getElementsByClassName("randomise");
Array.from(randomiseButtons).forEach(function(button) {
    button.onclick = function() {
        var turns = +button.value;
        randomiseCube(turns);
        drawCube(cubeMoveHistory.join(" "));
    }
})

document.getElementById("reset").onclick = function() {
    cubeMoveHistory = [] 
    drawCube(cubeMoveHistory);
}
