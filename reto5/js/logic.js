
function foundArea(a, b) {
    return document.getElementById("result").value = parseInt(a) * parseInt(b);
}

function foundPerimetro(a, b) {
    return document.getElementById("resultP").value = (parseInt(a) + parseInt(b)) * 2;
}

function foundDiagonal(a, b) {
    let raiz = parseInt(a) ** 2 + parseInt(b) ** 2;
    return document.getElementById("resultD").value = Math.sqrt(raiz);
}

document.getElementById("enviar").addEventListener("click", () => {
    let a = document.getElementById("base").value;
    let b = document.getElementById("altura").value;

    foundArea(a, b);
    foundPerimetro(a, b);
    foundDiagonal(a, b);
});