//var -> variável de escopo global, sendo acessado em todo o meu código
//let -> de escopo local (boa prática usar ele)
//const -> é global, mas é constante e não muda

/* Linguagem Case sensitive = reconhece letras maiusculas e minusculas

O DOM pode ser acessado por:
tag: getElementByTagName()
id: getElementById()
nome: getElementsByName()
classe: getElementsByClassName()
seletor: querySelector() 
*/

let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");

nome.style.width = "30%";
email.style.width = "30%";
assunto.style.width = "30%";

//se o nome tiver menos de 3 letras
function validaNome() {
  let txt = document.querySelector("#txtNome");
  if (nome.value.length < 3) {
    txt.innerHTML = "Nome inválido";
    txt.style.color ='red'
  } else {
    txt.innerHTML = "Nome válido";
    txt.style.color ='green'
  }
}
