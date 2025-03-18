// Array para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validación: Si el campo está vacío, mostrar alerta
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre a la lista y limpiar el campo de texto
    listaAmigos.push(nombre);
    input.value = "";

    // Actualizar la lista en la interfaz
    mostrarListaAmigos();
}

// Función para mostrar la lista de amigos en el DOM
function mostrarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Recorrer la lista de amigos y crear elementos <li>
    listaAmigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Función para realizar el sorteo de amigo secreto
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega amigos primero.");
        return;
    }

    // Selección aleatoria del amigo secreto
    const indice = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indice];

    // Mostrar el resultado en la interfaz
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}
