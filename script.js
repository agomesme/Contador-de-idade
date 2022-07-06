function verificar() {
    var data = new Date()
    var ano = data.getFullYear() 
    var fano = document.getElementById('txtano') 
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Preencha o ano!') 
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'crianca-homem.jpeg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-homem.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-homem.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-homem.jpeg')
            }
        } else if (fsex[1].checked) {
                gênero = 'Mulher'
                if (idade >=0 && idade < 12) {
                    // Criança
                    img.setAttribute('src', 'crianca-menina.jpg')
                } else if (idade < 21) {
                    // Jovem
                    img.setAttribute('src', 'jovem-mulher.jpeg')
                } else if (idade < 50) {
                    // Adulto
                    img.setAttribute('src', 'adulto-mulher.jpeg')
                } else {
                    // Idoso
                    img.setAttribute('src', 'idosa-mulher.jpeg')
                }
            } if (fsex[2].checked) {
                gênero = 'Indefinido'
                if (idade >=0 && idade < 12) {
                    // Criança
                    img.setAttribute('src', 'indefinido.jpg')
                } else if (idade < 21) {
                    // Jovem
                    img.setAttribute('src', 'indefinido.jpg')
                } else if (idade < 50) {
                    // Adulto
                    img.setAttribute('src', 'indefinido.jpg')
                } else {
                    // Idoso
                    img.setAttribute('src', 'indefinido.jpg')
                }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
}
    }
}