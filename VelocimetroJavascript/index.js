//Velocidade máxima 70km
const velocidadePermitida = 70

//a cada 5km acima +1 ponto na carteira
//Se pontos >= 12 == 'Carteira suspensa'

console.log('')
console.log('🚗 VELOCIDADE MÁXIMA 70km/h 🚗')

//Nessa variável você poderá definir a velocidade do seu carro
let velocidadeAtual = 70


if (velocidadeAtual <= velocidadePermitida) {
    console.log('')
    console.log('✅ Velocidade PERMITIDA, sua velocidade é: ' + velocidadeAtual + 'km/h')
    console.log('')
} else {
    let pontos = ((velocidadeAtual - velocidadePermitida) / 5)
    if (pontos >= 12) {
        console.log('')
        console.log('⛔ Velocidade PROIBIDA, sua velocidade é: ' + velocidadeAtual + 'km/h')
        console.log('⛔ A SUA CARTEIRA ESTÁ SUSPENSA ⛔')
        console.log('⛔ VOCÊ ESTÁ COM: '+pontos+' pontos')
    }
    else{
        console.log('')
        console.log('⛔ Velocidade PROIBIDA, sua velocidade é: ' + velocidadeAtual + 'km/h')
        console.log('⛔ VOCÊ ESTÁ COM: '+pontos+' pontos')

    }
}