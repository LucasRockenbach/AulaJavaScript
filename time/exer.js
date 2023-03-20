

function carregar (){
    let msg = window.document.querySelector('.mensagem')
    let img = window.document.querySelector('.imagem')
    var data = new Date()
    var hora = data.getHours()
    var dia = data.getDay()
    msg.innerHTML = `Hoje é dia ${dia} e agora são ${hora} horas`
    if(hora >= 8 && hora <= 12){
        img.src = 'img/manha.jpg'
        document.style.backgroundColor = 'yellow'
        
    }else if (hora >12 && hora <=18){
        img.src = 'img/tarde.jpg'
        document.style.backgroundColor = "bronw"
    }else if (hora > 18 && hora <=0){
        img.src = 'img/noite.jpg'
        document.body.style.backgroundColor = "grey"
    }
}