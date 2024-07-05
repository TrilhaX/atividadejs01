function contarPalavrasUnicas(frase) {
    frase = frase.toLowerCase();
    let palavras = frase.split(/\s+/);
    let palavrasUnicas = new Set(palavras);
    return palavrasUnicas.size;
}

let frase = "Este é um exemplo de frase com palavras repetidas repetidas";
let contagem = contarPalavrasUnicas(frase);
console.log(`Número de palavras únicas: ${contagem}`);