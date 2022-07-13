let produtos = [
    {
        imagem: "./assets/img/actions/animewoman.jpg",
        nome:   "Boneco de Anime",
        valor:  99.99,
        classe: "bonecos",
    },
    {
        imagem: "./assets/img/actions/dragonballpersonagem.jpg",
        nome:   "Boneco Dragon Ball",
        valor:  120.99,
        classe: "bonecos",
    },
    {   
        imagem: "./assets/img/actions/starwarspersonagem.jpg",
        nome:   "Boneco StarWars",
        valor:  150.99,
        classe: "bonecos",
    },
    {   
        imagem: "./assets/img/painting/clock.jpg",
        nome:   "Quadro Moderno",
        valor:  80.99,
        classe: "quadros"
    },
    {   
        imagem: "./assets/img/painting/gamepad.jpg",
        nome:   "Quadro Gamer",
        valor:  60.99,
        classe: "quadros",
    },
    {   
        imagem: "./assets/img/painting/personagem.jpg",
        nome:   "Quadro StarWars",
        valor:  99.99,
        classe: "quadros",
    },
    
    ]
    



let listFigure   = []

let listPainting = []

function createActionItem(listaProdutos){

    let vitrine = document.querySelector(".bonecos")

    for(let i = 0; i < listaProdutos.length;i++){

        if(produtos[i].classe == "bonecos"){
            listFigure.push(produtos[i])

        let ul     = document.createElement("ul")
        let lista  = document.createElement("li")
        let imagem = document.createElement("img")
        let nome   = document.createElement("p")
        let preco  = document.createElement("p") 

        imagem.classList.add("foto")
        nome.classList.add("nomeItem")
        preco.classList.add("preco")

        imagem.src      = produtos[i].imagem
        nome.innerText  = produtos[i].nome
        preco.innerText = `R$ ${produtos[i].valor}`.replace(".",",")

        
        vitrine.appendChild(lista)
        lista.appendChild(imagem)
        lista.appendChild(nome)
        lista.appendChild(preco)
        

        }
        
    } 
   
}

console.dir(produtos)
console.log(createActionItem(produtos))


function createPaintingItem(listaProdutos){

    let vitrine = document.querySelector(".quadros")

    for(let i = 0; i < listaProdutos.length;i++){

        if(produtos[i].classe == "quadros"){
            
            listPainting.push(produtos[i])

            let lista  = document.createElement("li")
            let imagem = document.createElement("img")
            let nome   = document.createElement("p")
            let preco  = document.createElement("p") 
    
            imagem.classList.add("foto")
            nome.classList.add("nomeItem")
            preco.classList.add("preco")
    
            imagem.src      = produtos[i].imagem
            nome.innerText  = produtos[i].nome
            preco.innerText = `R$ ${produtos[i].valor}`.replace(".",",")
    
            vitrine.appendChild(lista)
            lista.appendChild(imagem)
            lista.appendChild(nome)
            lista.appendChild(preco)

        }
    } 
}

console.log(createPaintingItem(produtos))


