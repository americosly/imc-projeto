var titulo =  document.querySelector(".slect");

		titulo.textContent = "Teste";

        console.log(titulo)

var pacientes = document.querySelectorAll(".paciente");

for(i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i]

var tdPesoPaciente = paciente.querySelector(".info-peso");
var pesoPaciente1 = tdPesoPaciente.textContent;
var pesoValido = true;

if (pesoPaciente1 <= 0 || pesoPaciente1 >= 800) {
    pesoValido = false;
    
}

function validPeso(){
    if (pesoValido == false) {
        tdPesoPaciente.textContent = " Peso invalido!"
        paciente.classList.add("paciente-invalido")
    }
}

validPeso()


var tdAlturaPaciente = paciente.querySelector(".info-altura");
var alturaPaciente1 = tdAlturaPaciente.textContent;
var alturaValida = true;

if (alturaPaciente1 <= 0 || alturaPaciente1 >= 3.00) {
    alturaValida = false;
}

function validAltura(){
    if (alturaValida == false) {
        tdAlturaPaciente.textContent = "Altura invalida!"
        paciente.classList.add("paciente-invalido")
    }
}

validAltura()

imc = "Erro";

console.log(alturaValida)

if (alturaValida == true && pesoValido == true) {
    imc = pesoPaciente1 / (alturaPaciente1 * alturaPaciente1)
    
}



var tdImcPaciente1 = paciente.querySelector(".info-imc")

console.log(imc)

function calcIMC() {
    if (imc >= 200) {
        return tdImcPaciente1.textContent = "Você ainda é um humano?"
    } if (imc >= 40) {
        return tdImcPaciente1.textContent = "Seu IMC é de: " + imc.toFixed(2) + " Você está com obesidade III"
    } if (imc >= 35) {
        return tdImcPaciente1.textContent = "Seu IMC é de: " + imc.toFixed(2) + " Você está com obesidade II"
    } if (imc >= 30) {
        return tdImcPaciente1.textContent = "Seu IMC é de: " + imc.toFixed(2) + " Você está com obesidade I"
    } if (imc >= 25) {
        return tdImcPaciente1.textContent = "Seu IMC é de: " + imc.toFixed(2) + "  Você está acima do peso"
    } if (imc >= 18.50) {
        return tdImcPaciente1.textContent = "Seu IMC é de: " + imc.toFixed(2) + " Você está com o peso normal"
    } if (imc >= 17) {
        return tdImcPaciente1.textContent = "Seu IMC é de: " + imc.toFixed(2) + " Você está abaixo do peso"
    } if (imc < 17) {
        return tdImcPaciente1.textContent = "Seu IMC é de: " + imc.toFixed(2) + " Você está muito abaixo do peso"
    }else {
        return tdImcPaciente1.textContent = " Digite Peso/Altura Valida! "
    }
}

calcIMC()
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var nomeTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    nomeTd.textContent = nome;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
});









