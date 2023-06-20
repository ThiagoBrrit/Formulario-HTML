const form = document.getElementById("form-comparador")



form.addEventListener("submit", function(e) {
    e.preventDefault();

    const numA = parseFloat (document.getElementById('campoa').value);
    const numB = parseFloat (document.getElementById('campob').value);
    const mensagemcompare = 'Formulario valido: o campo B: ' + numB + ' é maior que o campo A: ' + numA;
    const mensagemcompareN = 'Formulario Invalido: o campo B: ' + numB + ' não é maior que o campo A: ' + numA;

    function numerovalido(numA, numB){
    if (numB > numA){
        const containermensagem = document.querySelector('.mensagem')
        containermensagem.innerHTML =  mensagemcompare;
        containermensagem.style.display = 'block';;
        return true;
    } else {
        const containermensagem = document.querySelector('.mensagem')
        containermensagem.innerHTML =  mensagemcompareN;
        containermensagem.style.display = 'block';;
        return false;
    }
}
formevalido = numerovalido(numA, numB)
});

