var screenHeight = window.screen.availHeight * 0.66;

function drawCube() {
    var algorithm = document.getElementById("algorithm").value;
    var showAlgorithm = document.getElementById("show_algorithm").checked;
    document.getElementById("cube_viz").innerHTML = "";
    var cube = TTk.AlgorithmPuzzle(3)
        .showAlg(showAlgorithm)
        .size({width:screenHeight, height:screenHeight})
        .alg(algorithm)
        ('#cube_viz');
    cube.moveInterate()
        .mouse(false)
        .rotate(true);
}

document.getElementById("read").onclick = function() {
    drawCube();
}
