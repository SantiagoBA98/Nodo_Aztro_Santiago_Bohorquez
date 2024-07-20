function calcularPromedio() {
    let suma = 0;
    let tiempos = document.querySelectorAll("#segundos");

    tiempos.forEach(e => suma += parseInt(e.value));

    document.querySelector("#promedio").value = suma / 60;

}

function calcularLitros() {
    let baseMayor = parseFloat(document.getElementById('baseMayor').value);
    let baseMenor = parseFloat(document.getElementById('baseMenor').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let area = ((baseMayor + baseMenor) / 2) * altura;
    let pesticida = area * 1.5;
    let perimetro = baseMayor + baseMenor + (2 * Math.sqrt(Math.pow((baseMayor - baseMenor) / 2, 2) + Math.pow(altura, 2)));
    document.getElementById('resultadoPesticida').innerText = 'Litros de pesticida: ' + pesticida.toFixed(2);
    document.getElementById('resultadoCerca').innerText = 'Metros de cerca eléctrica: ' + perimetro.toFixed(2);
}

function calcularLadrillos() {
    let alturaPared = parseFloat(document.getElementById('alturaPared').value);
    let anchoPared = parseFloat(document.getElementById('anchoPared').value);
    let alturaLadrillo = parseFloat(document.getElementById('alturaLadrillo').value);
    let anchoLadrillo = parseFloat(document.getElementById('anchoLadrillo').value);
    let areaPared = alturaPared * anchoPared;
    let areaLadrillo = alturaLadrillo * anchoLadrillo;
    let numLadrillos = areaPared / areaLadrillo;
    document.getElementById('resultadoLadrillos').innerText = 'Número de ladrillos necesarios: ' + Math.ceil(numLadrillos);
}

function calcularIMC() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('alt').value);
    let imc = peso / (altura * altura);
    document.getElementById('resultadoIMC').innerText = 'IMC: ' + imc.toFixed(2);
    let rango = '';
    if (imc < 18.5) {
        rango = 'Bajo peso';
    } else if (imc < 24.9) {
        rango = 'Normal';
    } else if (imc < 29.9) {
        rango = 'Sobrepeso';
    } else {
        rango = 'Obesidad';
    }
    document.getElementById('resultadoRango').innerText = 'Rango: ' + rango;
}