let imagem1 = 1;
let imagem2 = 1;
let quantidadeDeImagens = 3;

function voltaImagem1(){
    if(imagem1 == 1){
        imagem1 = quantidadeDeImagens;
    }else{
        imagem1--;
    }
    let img = document.getElementById('img1')
    img.src = `./assets/comoSeparar${imagem1}.jpg`
}

function voltaImagem2(){
    if(imagem2 == 1){
        imagem2 = quantidadeDeImagens;
    }else{
        imagem2--;
    }
    let img = document.getElementById('img2')
    img.src = `./assets/comoNaoSeparar${imagem2}.jpg`
}

function proximaImagem1(){
    if(imagem1 == quantidadeDeImagens){
        imagem1 = 1
    }else{
        imagem1++
    }
    let img = document.getElementById('img1')
    img.src =`./assets/comoSeparar${imagem1}.jpg`
}

function proximaImagem2(){
    if(imagem2 == quantidadeDeImagens){
        imagem2 = 1
    }else{
        imagem2++
    }
    let img = document.getElementById('img2')
    img.src =`./assets/comoNaoSeparar${imagem2}.jpg`
}
