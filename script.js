function verificarPrimo() {
    // Obtener el valor del input
    let numero = parseInt(document.getElementById('numero').value);

    // Verificar si el número es primo
    let esPrimo = true;
    if (numero <= 1) {
        esPrimo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }

    // Mostrar el resultado
    if (esPrimo) {
        
        document.getElementById('resultado').innerText = `${numero} es un número primo.`;
        document.getElementById('resultado').className = 'primo';
    } else {
    
        document.getElementById('resultado').innerText = `${numero} no es un número primo.`;
        document.getElementById('resultado').className = 'no-primo';
    }
}
