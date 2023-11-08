let aberta = 'aberta.jpg'
let fechado = 'fechado.jpg'


function abrir(){
    document.getElementById('cortina').src = fechado
    let a = fechado
}
function fechar(){
    document.getElementById('cortina').src = aberta
    let a = aberta
   
}