

//---------Aula 1 parte 5---------\\ -- TROCANDO TEXTO USANDO ATRAVÉS DAS FUNÇOES ONCHANGED, ONLOAD, ONMOUSEOVER, ONMOUSEOUT E ONCLICK.

// function botao(){
//     document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
//     // alert("Obrigado por clicar");
// }

// function redirecionar(){
//     window.open("https://www.youtube.com/"); //-- ABRE EM OUTRA ABA.
//     //window.location.href = "https://www.youtube.com/"; //-- ABRE NA MESMA ABA.
// }

// function trocar(elemento){
//     elemento.innerHTML = "Obrigado por passar o mouse";
//     //alert("trocar texto");
// }

// function voltar(elemento){
//     elemento.innerHTML = "Passe o mouse aqui";
// }

// function load(){
//     alert("pagina carregada");
// }

// function funcaoChanged(elemento){
//     console.log(elemento.value);
// }



//---------Aula 1 parte 4---------\\ -- UTILIZANDO FUNÇÕES, INCLUINDO REPLACES.

// function validaIdade(idade){

//     var validar = true;
//     if(idade >= 18){
//         validar = true;
//     }else{
//         validar = false;
//     }
//     return validar;
// }

// var idade = prompt("Qual sua idade?");
// console.log(validaIdade(idade));

// function soma(n1, n2){
//     return n1 + n2;
// }

// alert(soma(5, 10));


// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome)
// }

// alert(setReplace("Vai japao", "japao", "Brasil"));



//---------Aula 1 parte 3---------\\ -- LAÇOS DE REPETIÇÃO FOR E HILE, BUSCAR DATA.


// var d = new Date();
// alert(d.getDate());
// alert(d.getMonth() +1);
// alert(d.getDay() );
// alert(d.getHours());
// alert(d.getMinutes());




// var count;

// for(count = 0; count <= 5; count++){
//     alert(count);
// }

// var count = 0;

// while(count <= 5){
//     console.log(count);
//     alert(count);
//     count++;
// }


// var idade = prompt("Qual sua idade");

// if(idade >= 18){
//     alert("Maior de idade")
// }else{
//     alert("Menor de idade")
// };



//---------Aula 1 parte 2---------\\ -- MONTANDO DICIONARIO E DICIONARIO EM LISTA.

// var fruta = [{nome:"maçã", cor:"vermelha"}, {nome:"pera", cor:"amarela"}, {nome:"maçã verde", cor:"verde"}]
// console.log(fruta);

// var fruta1 = {nome:"maçã", cor:"vermelha"}
// var fruta2 = {nome:"pera", cor:"amarela"}
// var fruta3 = {nome:"maçã verde", cor:"verde"}
// var fruta4 = {nome:"laranja", cor:"laranja"}
// var fruta5 = {nome:"morango", cor:"vermelha"}

// console.log(fruta1.nome);
// console.log(fruta2);
// console.log(fruta3);
// console.log(fruta4);
// console.log(fruta5);





//var lista = ["pera","maçã","laranja"];

//lista.pop();
//lista.push("uva")

//console.log(lista.toString());
//console.log(lista.join(" "));



//---------Aula 1 parte 1---------\\ -- DECLARANDO VARIAVEIS INT E STRING, FAZENDO CONTAS E FORMATANDO ELAS.

//var nome = "Joao Lolis";
//var n1= 2;
//var n2 = 10;
//var frase = "Japao é o melhor time do mundo";

//alert( "Bem vindo "+ nome + idade + " anos" );
//alert ( idade + idade2 );

//console.log( nome );
//console.log( n1 * n2 );
//console.log( frase.toUpperCase() );