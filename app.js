// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let NombreAmigo = [];

function agregarAmigo() {
       let texto = document.getElementById("amigo").value;
       if (texto == "") {
          alert("Por favor, inserte un nombre.");
          return;
       } else {
           NombreAmigo.push(texto);
       }
       limpiartexto();
       listaAmigo();
    
}

function limpiartexto() {
    document.querySelector('#amigo').value = '';
   
}

function listaAmigo() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < NombreAmigo.length; i++) {
         let li = document.createElement("li"); // Crear elemento <li>
         li.textContent = NombreAmigo[i]; // Asignar el nombre al <li>
         lista.appendChild(li); // Agregar el <li> a la lista <ul>
        }    
 
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    if (NombreAmigo.length === 0) {
        resultado.innerHTML = "No hay amigos en la lista.";
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * NombreAmigo.length);
    let amigoSorteado = NombreAmigo[indiceAleatorio];
    resultado.innerHTML = `🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}