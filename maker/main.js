var screenHeight = window.screen.availHeight * 0.66;
var cube = TTk.AlgorithmPuzzle(3);
var cumulativeSeedAlgorithm = "";
var sides = ["F", "B", "U", "D", "R", "L"]

function getRandomSide() {
    return sides[Math.floor(Math.random() * sides.length)];
}

function getInverse() {
    var inverseChance = Math.round(Math.random());
    if (inverseChance == 1) {
        return "'";
    }
    return ""
}

function getRandomMove() {
    var randomSide = getRandomSide();
    var inverse = getInverse();
    return randomSide + inverse;
}

function getNewRandomAlgorithm(numberOfTurns) {
    var algorithm = " ";
    for(var i = 0; i < numberOfTurns; i++) {
        var move = getRandomMove();
        algorithm = algorithm + move + " ";
    }
    return algorithm;
}

function makeNewAlgorithm(algorithm) {
    return cumulativeSeedAlgorithm + algorithm;
}

function randomiseCube(numberOfTurns) {
    var algorithm = getNewRandomAlgorithm(+numberOfTurns);
    cumulativeSeedAlgorithm = makeNewAlgorithm(algorithm);
}

function drawCube(userAlgorithm) {
    var algorithm = makeNewAlgorithm(userAlgorithm);
    var showAlgorithm = document.getElementById("show_algorithm").checked;
    document.getElementById("cube_viz").innerHTML = "";
    cube.showAlg(showAlgorithm)
        .size({width:screenHeight, height:screenHeight})
        .alg(algorithm)
        ('#cube_viz');
    cube.moveInteract()
        .mouse(false)
        .rotate(true);
}

document.getElementById("read").onclick = function() {
    var userAlgorithm = document.getElementById("algorithm").value;
    drawCube(userAlgorithm);
}

var randomiseButtons = document.getElementsByClassName("randomise");
Array.from(randomiseButtons).forEach(function(button) {
    button.onclick = function() {
        var turns = button.value;
        randomiseCube(turns);
        drawCube("");
    }
})

document.getElementById("reset").onclick = function() {
    cumulativeSeedAlgorithm = ""
    drawCube("");
}
