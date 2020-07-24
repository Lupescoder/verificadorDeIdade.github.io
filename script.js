function exibir() {
    let data = new Date()
    let agora = data.getFullYear()
    let ano = document.getElementById("ano")
    let msg = document.getElementById("texto")
    let sexo = document.getElementsByName("gender")
    let show = document.getElementById("foto")
    let anoDigit = Number(ano.value )
    let idade = agora - anoDigit
    if (sexo[0].checked && idade >= 20 && idade < 60 ){
        show.src = "adultoM.png"     
        msg.innerHTML = `Você é um homem Adulto de ${idade} anos`
    } else if (sexo[1].checked && idade >= 20 && idade < 60) {
         show.src = "adultoF.png"
         msg.innerHTML = `Você é uma mulher Adulta de ${idade} anos`

    }else if (sexo[0].checked && idade >=14 && idade <= 19){
        show.src = "jovemM.png"     
        msg.innerHTML = `Você é um homem Jovem de ${idade} anos`
    }else if (sexo[1].checked && idade >=14 && idade <= 19){
        show.src = "jovemF.png"     
        msg.innerHTML = `Você é uma mulher Jovem de ${idade} anos`

    }else if (sexo[0].checked && idade >=0 && idade <= 13){
        show.src = "bebeM.png"     
        msg.innerHTML = `Você é um Bebê de ${idade} anos`
    }else if (sexo[1].checked && idade >=0 && idade <= 13){
        show.src = "bebeF.png"     
        msg.innerHTML = `Você é uma Bebê de ${idade} anos`

    }else if (sexo[0].checked && idade >= 60){
        show.src = "idosoM.png"     
        msg.innerHTML = `Você é um homem idoso de ${idade} anos`
    }else if (sexo[1].checked && idade >=60){
        show.src = "idosoF.png"     
        msg.innerHTML = `Você é uma mulher idosa de ${idade} anos`
    }
}
