//Dando ação ao botão:
var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona"); //Para acessar um formulário
    var nome = form.nome.value; //Cada campo possui um name, e essa é a forma de acessá-lo.
    var peso = form.peso.value; //No caso de precisar usar o valor do campo, o atributo value deve ser usado.
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //Criação da tr do novo paciente:
    var pacienteTr = document.createElement("tr");

    //Criação das td para o novo paciente:
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    //Atribuindo valores do formulário:
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    //Adicionando as classes de cada elemento:
    pacienteTr.classList.add('paciente');
    nomeTd.classList.add('info-nome');
    pesoTd.classList.add('info-peso');
    alturaTd.classList.add('info-altura');
    gorduraTd.classList.add('info-gordura');
    imcTd.classList.add('info-imc');

    //Colocando as td dentro da tr:
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    //Adicionando o tr dentro do tbody:
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr)

    //Teste
    console.log(pacienteTr);

});
//Existe a forma chamada de event shortcut, que serve, na maioria dos casos, quando se quer 
//somente uma função para cada evento.
//Basta usar a forma (on + nomeDoEvent):
//  Ex.:
//      var botao = document.querySelector("#botao");
//      function botaoHandler(){
//          alert('Botão Clicado');
//      }
//
//      botao.onclick= botaoHandler;


function mostraMensagem() { //Função explícita
    console.log('Olá');
}

//titulo.addEventListener("click", mostraMensagem);
//titulo.addEventListener("click", function (){
//console.log("Hello!");          //Função anônima
//});