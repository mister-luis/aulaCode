
// Função teste
var clientes = [];
function cadastrarClientes(){
    event.preventDefault();



    var nome= document.getElementById("nome");
    var idade= document.getElementById("idade").value;
    var resultado;

    var cliente = new Object();
        cliente.nome = nome.value;
        cliente.idade = idade.value;

        clientes.push(cliente);

        document.getElementById('nome').value="";
        document.getElementById('idade').value="";
    console.log(clientes);
}