// 1. Arreglo inicial de servicios
const servicios = [
  { id: 1, nombre: "Agua" },
  { id: 2, nombre: "Electricidad" },
  { id: 3, nombre: "Gas" },
  { id: 4, nombre: "Internet" },
  { id: 5, nombre: "Cable Tv" },
];

// 2. Capturamos el elemento de la lista del HTML
const listaServicios = document.querySelector("#listaServicio");

// 3. Función para renderizar (mostrar) los servicios en pantalla
function renderizarServicios() {
  let plantilla = "";
  
  for (let servicio of servicios) {
    plantilla += `
      <li>
        ID: ${servicio.id} - NOMBRE: ${servicio.nombre} 
        <button onclick="borrar(${servicio.id})">Borrar</button>
      </li>
    `;
  }
  
  listaServicios.innerHTML = plantilla;
}

// 4. Función para eliminar un servicio por su ID
function borrar(id) {
  const index = servicios.findIndex((s) => s.id === id);
  
  if (index !== -1) {
    servicios.splice(index, 1);
    renderizarServicios(); // Volvemos a renderizar para actualizar la vista
  }
}

// 5. Evento para agregar un nuevo servicio desde el input
btnServicios.addEventListener("click", () => {
  const nombreServicio = inputServicios.value.trim();

  // Validamos que el input no esté vacío
  if (nombreServicio === "") {
    alert("Por favor, ingresa el nombre del servicio.");
    return;
  }

  // Creamos el nuevo objeto con un ID único basado en la fecha actual y el nombre ingresado
  const nuevoServicio = { 
    id: Date.now(), 
    nombre: nombreServicio 
  };

  // Agregamos el servicio al arreglo
  servicios.push(nuevoServicio);

  // Limpiamos el input
  inputServicios.value = "";

  // Actualizamos la vista en pantalla
  renderizarServicios();
});

// Ejecutamos la función por primera vez al cargar la página
renderizarServicios();