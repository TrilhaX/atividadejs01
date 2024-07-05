function contarletra(frase, letra){
    frase = frase.toLowerCase();
    letra = letra.toLowerCase();

    let contador = 0

    for (let i = 0; i < frase.length; i++){
        if (frase[i] === letra) {
            contador++
        }
    }

    return contador;
}

let frase = "Sou lindo e o Maior"
let letra = "O"

let resultado = contarletra(frase, letra)
console.log(resultado)