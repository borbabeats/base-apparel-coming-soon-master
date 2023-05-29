function envio() {
    let dados = document.querySelector('#email').value

    if (dados === null || dados.indexOf('@') === -1) {
        msgError()
    } 
}


function msgError() {
    imgError = document.querySelector('#error')
    txtError = document.querySelector('#error-msg')
    imgError.style.display = 'block'
    txtError.style.display = 'block'
}