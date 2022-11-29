
function checkAssociacao(){
    
    let checkBoxAssociacao = document.getElementById('associacao')

    if(checkBoxAssociacao.checked){
        let divAssociacao = document.getElementById('afterCheckbox_associacao').style.display = 'flex';
    
        let divPessoaFisica = document.getElementById('afterCheckbox_pessoaFisica').style.display = 'none';
    }
    
}

function checkPessoaFisica(){

    let checkBoxPessoaFisica = document.getElementById('pessoaFisica')
    
    if(checkBoxPessoaFisica.checked){
        let divAssociacao = document.getElementById('afterCheckbox_associacao').style.display = 'none';
    
        let divPessoaFisica = document.getElementById('afterCheckbox_pessoaFisica').style.display = 'flex';
    }

}