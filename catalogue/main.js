var cubeHeight = window.screen.availHeight * 0.33;

function drawCube(algorithm, id) {
    var cube = TTk.AlgorithmPuzzle(3)
        .showAlg(false)
        .size({width:cubeHeight, height:cubeHeight})
        .alg(algorithm)
        ("#" + id);
}

function getAlgorithmsText(contentElem) {
    var algorithmsText = contentElem.text();
    return algorithmsText;
}

function getSplitAlgorithms(algorithmsText) {
    var splitAlgorithms = algorithmsText.split("---");
    return splitAlgorithms;
}

function createCatalogueElems(splitAlgorithms) {
    var catalogueElems = [];
    
    splitAlgorithms.forEach(function(algorithm) {
        console.log(algorithm);
        var algorithmElem = $("<pre>");
        algorithmElem.html(algorithm.replace(/\n/g, "<br>"));

        var cubeElem = $("<cube>");

        var catalogueElem = $("<div>");
        catalogueElem.attr("id", algorithm.replace(/\n/g, "").replace(/ /g, "").replace(/'/g, "appostrophe"));

        catalogueElem.append(algorithmElem);
        catalogueElem.append(cubeElem);
        catalogueElem.append("<br>");

        catalogueElems.push(catalogueElem);
    })

    return catalogueElems;
}

function updateContentElem(contentElem, catalogueElems) {
    catalogueElems.forEach(function(catalogueElem) {
        contentElem.append(catalogueElem);
    })
}

function addCubesToContent(catalogueElems) {
    catalogueElems.forEach(function(catalogueElem) {
        var algorithm = catalogueElem.find("pre").text();
        var id = catalogueElem.attr("id");
        drawCube(algorithm, id);
    })
}

$(document).ready(function() {
    var contentElem = $("#content");
    var algorithmsText = getAlgorithmsText(contentElem);

    contentElem.text("");
    
    var splitAlgorithms = getSplitAlgorithms(algorithmsText);
    var catalogueElems = createCatalogueElems(splitAlgorithms);

    updateContentElem(contentElem, catalogueElems);
    addCubesToContent(catalogueElems);
});
