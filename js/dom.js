// const elemento = document;
// const elemento = document.body;
// const elemento = document.body;


// const elemento = document.getElementById("subtitulo");


// const elementos = document.getElementsByClassName("container");

// for (let i = 0; i < elementos.length; i++) {
//     console.log(elementos[i]);
// }


// const elementos = document.getElementsByTagName("p");
// console.log(elementos[1]);


// const elemento = document.querySelector("main.container p:last-of-type");
// console.log(elemento);


// const elementos = document.querySelectorAll("p");
// console.log(elementos)
// elementos.forEach((elem) => {
//     console.log(elem);
// });



// const p = document.createElement("p");
// p.textContent = "Soy un nuevo párrafo";

// const div = document.querySelector("div.container");
// div.appendChild(p); // Insertar un elemento dentro de otro
// div.innerHTML += `<p>Soy un nuevo párrafo</p>`;


// console.log(elemento.textContent);
// console.log(elemento.innerText);
// console.log(elemento.innerHTML);


class Tarea {
	constructor(nombre) {
		this.nombre = nombre;
		this.estado = "Pendiente";
	}
}

function actualizarTareasLS(tareas) {
	/* Guardar tareas en LS */
	const tareasJSON = JSON.stringify(tareas);
	localStorage.setItem("tareas", tareasJSON);
}

function mostrarTareas(listaTareas) {
    const ul = document.querySelector(".lista-tareas");
    ul.innerHTML = ""; // Limpiamos el ul por si había tareas mostrándose
    listaTareas.forEach( tarea => {
        const li = document.createElement("li");
        if (tarea.estado === "Completada") {
            li.classList.add("completed");
        } else {
            li.classList.add("pending");
        }
        li.textContent = `Tarea: ${tarea.nombre} - Estado: ${tarea.estado}`;
        ul.appendChild(li);
    });
}


const tareasLS = localStorage.getItem("tareas");
let listaTareas;

if (tareasLS === null) {
	listaTareas = [];
} else {
	listaTareas = JSON.parse(tareasLS);
    mostrarTareas(listaTareas);
}

let opcionMenu;
while (opcionMenu !== 4) {

	const menu = `Elegi una opcion:
	1 - Ingresar una tarea
	2 - Completar una tarea
	3 - Filtrar tareas por categoria
	4 - Salir`;
	opcionMenu = Number(prompt(menu));

	
	if (!isNaN(opcionMenu) && opcionMenu < 4 && opcionMenu > 0) {
		switch (opcionMenu) {
			case 1:
				const nombre = prompt("Ingresa el nombre de la tarea");
				const tarea = new Tarea(nombre);
				listaTareas.push(tarea);
        
				actualizarTareasLS(listaTareas);

                mostrarTareas(listaTareas);
				break;
			case 2:
				const nombreTarea = prompt("Ingresa la tarea a completar");
				const nombreTareaNorm = nombreTarea.toLocaleLowerCase().trim();
				const index = listaTareas.findIndex(tarea => tarea.nombre.toLocaleLowerCase() === nombreTareaNorm);

				if (index > -1) {
					listaTareas[index].estado = "Completada";
                    
					actualizarTareasLS(listaTareas);

                   
                    mostrarTareas(listaTareas);
				} else {
					alert("Esa tarea no existe");
				}

				break;
			case 3:
				// TODO
				break;
			default:
				break;
		}

	} else if (opcionMenu == 4) {
		alert("Adios");
	} else {
		alert("La opcion ingresada es incorrecta");
	}

}
// const ul = document.querySelector(".lista-tareas");
// const li = ul.querySelector("li:last-of-type");

// li.remove();
