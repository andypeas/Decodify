const text = document.querySelector(".text");
const msg = document.querySelector(".msg");

function btnCodify() {
    const codified = codify(text.value);
    msg.value = codified;
    text.value = "";
}

function codify(codifiedString) {
    let matrixCode = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]];
    codifiedString = codifiedString.toLowerCase();

    for(let i = 0; i < matrixCode.length; i++) {
        if(codifiedString.includes(matrixCode[i][0])) {
            codifiedString = codifiedString.replaceAll(matrixCode[i][0], matrixCode[i][1]);
        }
    }

    return codifiedString;
}

function btnDecodify() {
    const decodified = decodify(text.value);
    msg.value = decodified;
    text.value = "";
}

function decodify(decodifiedString) {
    let matrixCode = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]];
    decodifiedString = decodifiedString.toLowerCase();

    for(let i = 0; i < matrixCode.length; i++) {
        if(decodifiedString.includes(matrixCode[i][1])) {
            decodifiedString = decodifiedString.replaceAll(matrixCode[i][1], matrixCode[i][0]);
        }
    }

    return decodifiedString;
}

document.querySelector(".copy").addEventListener("click", execCopy);

function execCopy() {
  document.querySelector(".msg").select();
  document.execCommand("copy");
}
