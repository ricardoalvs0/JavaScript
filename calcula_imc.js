//Paciente
// var paciente = document.querySelector('#paciente-1'); Para selecionar somente 1 paciente.
//Para fazer um loop com os pacientes.
//Acessando os dados dos pacientes
var pacientes = document.querySelectorAll(".paciente");
var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    //Peso
    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent; // Obter a string com o peso

    //Altura
    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent; // Obter a altura



    //Validação de dados
    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 1000) {
        pesoValido = false;
        tdpeso.textContent = "Peso Inválido";
        paciente.classList.add('dados-invalidos'); // Adicionando classes aos elementos
    } // Integrando css/html com o js

    if (altura <= 0 || altura >= 3.0) {
        alturaValida = false;
        tdaltura.textContent = "Altura Inválida";
        paciente.classList.add('dados-invalidos');
    }

    //Cálculo do IMC
    if (pesoValido && alturaValida) {
        var imc = peso / (altura * altura);
        var tdimc = paciente.querySelector(".info-imc");

        tdimc.textContent = imc.toFixed(2); // Mudança de valor na página
    }
}