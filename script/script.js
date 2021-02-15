// Json com os links dos textos
const publicacoes = {
    "textos": [
        {
            "nome": "I Miss You",
            "link": "i-miss-you.html"
        },
        {
            "nome": "O Universo Está em Ti",
            "link": "o-universo-esta-em-ti.html"
        },
        {
            "nome": "Castanhos",
            "link": "castanhos.html"
        },
        {
            "nome": "Só Mais Uma Página do Seu Livro",
            "link": "so-mais-uma-pagina-do-seu-livro.html"
        },
        {
            "nome": "Utópica",
            "link": "utopica.html"
        },
        {
            "nome": "Flashback",
            "link": "flashback.html"
        }
    ]
}

function loadOptions(){
    elemento_pai = document.querySelector('datalist')

    for( i = 0 ; i< publicacoes.textos.length; i++){
        op = document.createElement('option');
        op.value = publicacoes.textos[i].nome

        elemento_pai.appendChild(op);
    }
}

function searchText(event){
    search = document.querySelector('input').value
    match = false

    if(search == ""){
        alert("Preencha o campo para buscar o texto")
        event.preventDefault()
    }

    for(i=0; i<publicacoes.textos.length; i++){
        if(search == publicacoes.textos[i].nome){
            window.location.href = publicacoes.textos[i].link;
            match = true
        }
    }

    if(match==false){
        alert("Resultado não encontrado!")
    }
    
}





// Função que abre e fecha o modal das fotos dos textos
function clique(img) {
    var modal = document.getElementById('janelaModal');
    var modalImg = document.getElementById("imgModal");
    var btFechar = document.getElementsByClassName("fechar")[0];

    modal.style.display = "block";
    modalImg.src = img.src;

    btFechar.onclick = function () {
        modal.style.display = "none";
    }
}