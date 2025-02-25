let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

const resultado = document.getElementById('resultado')

function exibirResultado(menssagem){
    const h3 = document.createElement('h3')
    h3.innerHTML = menssagem
    resultado.appendChild(h3)
}

function compararTipoValor(){
    
    if ( numeroUm == stringUm) {
        exibirResultado('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes.')
    } else if ( numeroUm != stringUm) {
        exibirResultado('As variáveis numeroUm e stringUm não tem o mesmo valor.')
    } else {
        exibirResultado('As variáveis numeroUm e stringUm tem o mesmo valor, e mesmo tipo.')
    }
    
    if (numeroTrinta === stringTrinta) {
        exibirResultado('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo.')
    } else if (numeroTrinta == stringTrinta){
        exibirResultado('As variáveis numeroTrinta e stringTrinta tem o mesmo valor, mas tem tipos diferentes.')
    } else {
        exibirResultado('As variáveis numeroTrinta e stringTrinta  não tem o mesmo valor.')
    }
    
    if (numeroDez == stringDez) {
        exibirResultado('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes.')
    } else if (numeroDez != stringDez){
        exibirResultado('As variáveis numeroDez e stringDez não tem o mesmo valor.')
    } else {
        exibirResultado('As variáveis numeroDez e stringDez tem o mesmo valor, e mesmo tipo.')
    }

}

compararTipoValor()

    