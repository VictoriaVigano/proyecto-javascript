const h2 = document.querySelector("h2");
const input = document.querySelector("#nombre");
const form = document.querySelector("form");
const main = document.querySelector("main.container");
const div = document.querySelector("#eventos");

document.addEventListener('DOMContentLoaded', () => {
	console.log("HTML Listo");
})

window.addEventListener('load', () => {
	console.log("Todos los doc listos");
});
// h2.onclick = () => {
// 	console.log("Click desde JS");
// 	alert("Click desde JS");
// }

const evento = 'submit';

// h2.addEventListener(evento, headingClick);
// function headingClick() {
// 	
// 	div.innerHTML = `Escuchando el evento <strong>${evento}</strong>`;
// }

// input.addEventListener(evento, inputEvent);
// function inputEvent() {

// 	if (input.value.length < 3) {
// 		input.classList.add('is-invalid');
// 		input.classList.remove('is-valid');
// 	} else {
// 		input.classList.remove('is-invalid');
// 		input.classList.add('is-valid');
// 	}

// 	// console.log(`Code: ${e.code}`);
// 	// console.log(`keyCode: ${e.keyCode}`);
// 	// console.log(`key: ${e.key}`);
// 	// console.log(`which: ${e.which}`);
// 	// console.log(`===================`);
// 	// const div = document.querySelector("#eventos");
// 	// div.innerHTML = `Escuchando el evento <strong>${e.key}</strong>`;
// }

// main.addEventListener('click', e => {
// 	console.log(e.target);
// });

form.addEventListener(evento, formSubmit);
function formSubmit(e) {
	e.preventDefault();

	if (input.value.length < 3) {
		input.classList.add('is-invalid');
		input.classList.remove('is-valid');
		div.innerHTML = "Revisar errores";
	} else {
		input.classList.remove('is-invalid');
		input.classList.add('is-valid');
		div.innerHTML = "Formulario enviado";
	}

}
