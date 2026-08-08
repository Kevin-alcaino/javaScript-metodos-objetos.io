// Arreglo inicial. 
const tareas = [];

// Captura del elemento en el HTML.
const listaTareas = document.querySelector("#listaTareas");
const btnTarea = document.querySelector("#btnTarea");
const inputLista = document.querySelector("#inputLista");

// Función para renderizar (mostrar las tareas en pantalla).
const renderizarLista = () => {
    let plantilla = "";
    for (let tarea of tareas) {
        plantilla += `
        <li> 
        Id: ${tarea.id} - Nombre: ${tarea.nombre}
        </li>
        `;
    }
    listaTareas.innerHTML = plantilla;
}

// Evento para agregar nueva tarea desde el input
btnTarea.addEventListener("click", () => {
    const nombreTarea = inputLista.value.trim();

    //validamos que el input no este vacío
    if (nombreTarea ===""){
        alert("Escribe una nueva tarea...");
        return;
    }

    //Creamos el nuevo objeto con un ID unico basado en la fecha actual y el nombre ingresado
    const nuevaTarea = {
        id: Date.now(),
        nombre: nombreTarea
    } ;

    //Agregamos el servicio al arreglo
    tareas.push(nuevaTarea);

    //Limpiamos el input
    inputLista.value = "";

    //Actualizamos la vista de la pagina
    renderizarLista();

});

//Ejecutamos la función al cargar la pagina
renderizarLista()
