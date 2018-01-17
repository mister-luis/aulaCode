var dadosCliente = {
    endereco: {},
    contato: {},
    
};
    
function validarFormulario() {
    event.preventDefault();

    if(validarEndereco() &&validarContato()){
        console.log("validação está ok")
    }else{
        console.log("falhou man")
    }
}
function validarEndereco(_objEndereco) {
    var retorno = true;
    objEndereco = {
        pais : document.getElementById('country').value,
        cidade : document.getElementById('city').value,
        estado : document.getElementById('state').value,
        cep : document.getElementById('zipcode').value,
        endereco1 : document.getElementById('address1').value,
        endereco2 : document.getElementById('address2').value
    };
    
    console.log(objEndereco);
    
    if(objEndereco.pais == 0) {
        return false;
    }else if(objEndereco.estado.trim().lenght == 0){
        return false;
    }else if(objEndereco.cidade == 0){
        return false;
    }else if(objEndereco.cep.trim().lenght ==0){
        return false;
    }else if(objEndereco.endereco1.trim().lenght == 0){
        return false;
    }else if(objEndereco.endereco1.trim().lenght == 0){
        return false;
    }else{
        dadosCliente.endereco = objEndereco;
        return true;
    }
}
function validarContato(_objContato) {
    var pacote = false;
    
    if(document.getElementById('standard').checked) {
        pacote = document.getElementById('standard').value;
    }else if(document.getElementById('ultra').checked) {
        pacote = document.getElementById('ultra').value;
        
    }else{
        return false;
    }
    objContato = {
        primeironome : document.getElementById('firstname').value,
        ultimonome : document.getElementById('lastname').value,
        email : document.getElementById('email').value,
        telefone : document.getElementById('phone').value,
        
        metodo : pacote,
    };
    
    if(objContato.primeironome.trim().lenght == 0) {
        return false;
    }else if(objContato.ultimonome.trim().lenght == 0) {
        return false;
    }else if(objContato.email.trim().lenght == 0) {
        return false;
    }else if(objContato.telefone.trim().lenght == 0) {
        return false;
    }else {     
        dadosCliente.contato = objContato;
        return true;
    }
    console.log('string qualquer');
} 