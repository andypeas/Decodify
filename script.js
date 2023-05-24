const texto = document.querySelector(".texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado = encriptar(texto.value);
    mensagem.value = textoEncriptado;
    texto.value = "";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(texto.value);
    mensagem.value = textoDesencriptado;
    texto.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

document.querySelector(".copiar").addEventListener("click", execCopy);

function execCopy() {
  document.querySelector(".mensagem").select();
  document.execCommand("copy");
}