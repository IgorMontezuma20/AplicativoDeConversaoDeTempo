let dataEntrada = prompt("Digite a data de partida (formato DD/MM/YYYY)")

let dataPartida = moment(dataEntrada, "DD/MM/YYYY")

let dataAtual = moment()

let dif = dataAtual - dataPartida

let escolha = prompt("Esccolha como gostaria de exibir o tempo de partida.\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")
if(escolha == '1'){
    let partidaSegundos = Math.round(dif / 1000)
    alert(`O tempo de vôo será de ${partidaSegundos} segundos!`)
}else if(escolha == '2'){
    let partidaMinutos = Math.round(dif / 1000 / 3600)
    alert(`O tempo de vôo será de ${partidaMinutos} minutos!`)
}else if(escolha == 3){
    let partidaHoras = Math.round(dif / 1000 / 60)
    alert(`O tempo de vôo será de ${partidaHoras} horas!`)
}else if(escolha == 4 ){
    let partidaDias = Math.round(dif / 1000 / 3600 / 24)
    alert(`O tempo de vôo será de ${partidaDias} dias!`)
}else{
    alert("ERRO! Digite alguma das opções disponíveis acima.")
}