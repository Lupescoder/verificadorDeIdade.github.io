function exibir() {
    let data = new Date()
    let agora = data.getFullYear()
    let ano = document.getElementById("ano")
    let msg = document.getElementById("texto")
    let sexo = document.getElementsByName("gender")
    let show = document.getElementById("foto")
    let anoDigit = Number(ano.value )
    let idade = agora - anoDigit
    if (sexo[0].checked && idade >= 26 && idade < 60 ){
        show.src = "adultoM.png"     
        msg.innerHTML = `Você é um homem Adulto de ${idade} anos`
    } else if (sexo[1].checked && idade >= 26 && idade < 60) {
         show.src = "adultoF.png"
         msg.innerHTML = `Você é uma mulher Adulta de ${idade} anos`

    }else if (sexo[0].checked && idade >=20 && idade <= 25){
        show.src = "jovemM.png"     
        msg.innerHTML = `Você é um homem Jovem de ${idade} anos`
    }else if (sexo[1].checked && idade >=20 && idade <= 25){
        show.src = "jovemF.png"     
        msg.innerHTML = `Você é uma mulher Jovem de ${idade} anos`

    }else if (sexo[0].checked && idade >=0 && idade <= 8){
        show.src = "bebeM.png"     
        msg.innerHTML = `Você é um Bebê de ${idade} anos`
    }else if (sexo[1].checked && idade >=0 && idade <= 8){
        show.src = "bebeF.png"     
        msg.innerHTML = `Você é uma Bebê de ${idade} anos`

    }else if (sexo[0].checked && idade >= 60){
        show.src = "idosoM.png"     
        msg.innerHTML = `Você é um homem idoso de ${idade} anos`
    }else if (sexo[1].checked && idade >=60){
        show.src = "idosoF.png"     
        msg.innerHTML = `Você é uma mulher idosa de ${idade} anos`

    }else if (sexo[0].checked && idade >=15 && idade <= 19){
        show.src = "teenM.jpg"     
        msg.innerHTML = `Você é um Adolecente de ${idade} anos`
    }else if (sexo[1].checked && idade >=15 && idade <= 19){
        show.src = "teenF.jpg"     
        msg.innerHTML = `Você é uma Adolecente de ${idade} anos`

    }else if (sexo[0].checked && idade >=8 && idade <= 14){
        show.src = "prejovemM.jpg"     
        msg.innerHTML = `Você é uma criança de ${idade} anos`
    }else if (sexo[1].checked && idade >=8 && idade <= 14){
        show.src = "prejovemF.jpg"     
        msg.innerHTML = `Você é uma criança de ${idade} anos`
    }
}
