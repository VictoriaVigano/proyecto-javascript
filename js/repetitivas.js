/* FOR */
/* Tabla del 7 */

// const numero = Number(prompt("Qué tabla querés saber"));

// for (let i = 10; i > 0; i--) {
// 	// console.log('7x' + i + ' = ' + 7 * i);
// 	console.log(`${numero}x${i} = ${numero * i}`);
// }

// iteracion | i  | consola
//    1        0    console.log(7*0);
//    2        1    console.log(7*1);
//    3        2    console.log(7*2);

// const magicNumber = 57;

// for (let i = 0; i < 3; i++) {

// 	const numeroUser = Number(prompt("Ingresa un número entre 0 y 100"));

// 	if (numeroUser > 100 || numeroUser < 0) {
// 		alert("El número ingresado no está entre 0 y 100!");
// 		i--;
// 		continue;
// 	}

// 	if (numeroUser === magicNumber) {
// 		alert("Felicitacoines, encontraste el número mágico");
// 		break; // Cortamos la ejecución del ciclo
// 	} else {
// 		alert("Incorrecto, intenta otra vez");
// 	}
// }

// for (let i = 0; i < 10; i++) {
// 	if (i % 2 == 0) {
// 		continue; // Cortamos la iteración actual
// 	}
// 	console.log(`Número ${i}`);
// }

/* WHILE */

// const magicNumber = 57;
// let userNumber = Number(prompt("Ingrese un número entre 0 y 100"));

// while ( userNumber !== magicNumber ) {

// 	if (userNumber < 0 || userNumber > 100) {
// 		alert("El número ingresado no está entre 0 y 100!");
// 		userNumber = Number(prompt("Ingrese un número entre 0 y 100"));
// 		continue;
// 	}
// 	alert("El número ingresado es incorrecto");
// 	userNumber = Number(prompt("Ingrese un número entre 0 y 100"));
// }

// alert("Felicitacoines, encontraste el número mágico");

/* DO WHILE */

const magicNumber = Math.floor(Math.random() * 100);
console.log(magicNumber);
let userNumber;
let intentos = 5;

do {
	userNumber = Number(prompt("Ingrese un número entre 0 y 100 o una letra cualquiera para salir del juego"));
if ( isNaN(userNumber) ) {
	alert("Gracias por haber jugado");
    break;
}

if (userNumber < 0 || userNumber > 100) {
	alert("El número ingresado no está entre 0 y 100!");
		continue;
	}

if (userNumber < magicNumber) {
		alert("El número ingresado es menor que el Magic Number");
// 		intentos--;
	} else if (userNumber > magicNumber) {
		alert("El número ingresado es mayor que el Magic Number");
// 		intentos--;
	} else {
		alert("Felicitacoines, encontraste el número mágico");
	}

} while (userNumber !== magicNumber && intentos > 0)